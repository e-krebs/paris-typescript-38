import { Link } from "../components/Link";

export const Tools = () => (
  <div className="flex flex-col gap-12">
    <div>
      You can visit <Link to="tools.rules">rules</Link> to
      view rules 📏
    </div>
    <div>
      Or you can visit{" "}
      <Link to="tools.synonyms">synonyms</Link> to view
      synonyms 🍫
    </div>
    <div>
      Visit{" "}
      <Link
        to={{
          path: "tools.rules.id",
          params: { id: "123" },
        }}
      >
        rule with id 123
      </Link>{" "}
      🆔
    </div>
    <div>
      Visit{" "}
      <Link
        to={{
          path: "tools.rules.id",
          params: { id: "456" },
        }}
      >
        rule with id 456
      </Link>{" "}
      🆔
    </div>
  </div>
);
