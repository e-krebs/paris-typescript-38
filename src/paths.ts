/* eslint-disable @typescript-eslint/no-unused-vars */
export const paths = {
  home: "/",
  tools: {
    root: "tools",
    rules: { root: "rules", id: ":id" },
    synonyms: "synonyms",
  },
  settings: "settings",
} as const;

// type Recursive<T> = keyof {
//   [Property in keyof T as T[Property] extends string
//     ? Property
//     : `${string & Property}.${string & Recursive<T[Property]>}`]: true;
// };

type Recursive<T> = keyof {
  [Property in keyof T as T[Property] extends string
    ? Property extends "root"
      ? never
      : Property
    : `${string & Property}.${string & Recursive<T[Property]>}` | Property]: true;
};

type GetParamsPath<T> = keyof {
  [Property in keyof T as T[Property] extends string
    ? Property extends "root"
      ? never
      : T[Property] extends `:${infer _Params}`
      ? Property
      : never
    : "root" extends keyof T[Property]
    ? T[Property]["root"] extends `:${infer _Params}`
      ? `${string & Property}.${Recursive<T[Property]>}` | Property
      : `${string & Property}.${GetParamsPath<T[Property]>}`
    : `${string & Property}.${GetParamsPath<T[Property]>}`]: true;
};

type Path = Recursive<typeof paths>;

type PathWithParams = GetParamsPath<typeof paths>;

export type FullPath<T extends Path = Path> = T extends PathWithParams
  ? { path: PathWithParams; params: Params<T> }
  : T;

type Split<T, Separator extends string> = T extends `${infer Head}${Separator}${infer Tail}`
  ? [Head, ...Split<Tail, Separator>]
  : [T];

type GetParamsFromPath<T extends PathWithParams> = Split<T, ".">;

type ExtractParams<T, Path extends string[]> = Path extends [infer First, ...infer Tail]
  ? First extends keyof T
    ? T[First] extends string
      ? T[First] extends `:${infer Param}`
        ? [Param]
        : []
      : "root" extends keyof T[First]
      ? T[First]["root"] extends string
        ? T[First]["root"] extends `:${infer Param}`
          ? Tail extends string[]
            ? [Param, ...ExtractParams<T[First], Tail>]
            : [Param]
          : Tail extends string[]
          ? ExtractParams<T[First], Tail>
          : []
        : []
      : []
    : []
  : [];

export type Params<P extends Path> = P extends PathWithParams
  ? { [key in ExtractParams<typeof paths, GetParamsFromPath<P>>[number]]: string }
  : never;

const getPathValue = (value: string, routeParams: Record<string, string>): string =>
  value.startsWith(":") ? routeParams[value.substring(1)] : value;

export const getPath = (params: FullPath): string => {
  const path: Path = typeof params === "string" ? params : params.path;
  const routeParams: Record<string, string> =
    (typeof params === "string" ? undefined : params.params) ?? {};
  let currentPath = paths as any;
  const keys = path.split(".");
  const values: string[] = [];

  for (const key of keys) {
    currentPath = currentPath[key];
    if (currentPath === undefined) break;
    if (typeof currentPath === "string") {
      values.push(getPathValue(currentPath, routeParams));
    } else if (typeof currentPath["root"] === "string") {
      values.push(getPathValue(currentPath["root"], routeParams));
    }
  }

  return values.map((a) => (a.startsWith("/") ? a : `/${a}`)).reduce((a, b) => `${a}${b}`);
};
