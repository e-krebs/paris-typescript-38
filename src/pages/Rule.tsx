import { useParams } from "react-router-dom";
import type { Params } from "../paths";

export const Rule = () => {
  const { id } = useParams<Params<"tools.rules.id">>();

  return (
    <div className="p-6">
      Rule with id <strong>{id}</strong> 🆔
    </div>
  );
};
