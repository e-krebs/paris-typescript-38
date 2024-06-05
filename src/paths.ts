export const paths = {
  home: "/",
  tools: {
    root: "tools",
    rules: "rules",
    syno: "synonyms",
  },
  settings: "settings",
};

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

export type Path = Recursive<typeof paths>;

export const getPath = (path: Path): string => {
  let currentPath = paths as any;
  const keys = path.split(".");
  const values: string[] = [];

  for (const key of keys) {
    currentPath = currentPath[key];
    if (currentPath === undefined) break;
    if (typeof currentPath === "string") {
      values.push(currentPath);
    } else if (typeof currentPath["root"] === "string") {
      values.push(currentPath.root);
    }
  }

  return values.reduce((a, b) => `/${a}/${b}`);
};
