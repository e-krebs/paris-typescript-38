import { Link } from "../components/Link";

export const Tools = () => (
  <div className="flex flex-col gap-12">
    <div>
      You can visit <Link to="tools.rules">rules</Link> to
      view rules 📏
    </div>
    <div>
      Or you can visit <Link to="tools.syno">synonyms</Link>{" "}
      to view synonyms 🍫
    </div>
  </div>
);
