import { Link } from "../components/Link";

export const Tools = () => (
  <div className="flex flex-col gap-12">
    <div>
      You can visit <Link to="/rules">rules</Link> to view
      rules 📏
    </div>
    <div>
      Or you can visit <Link to="synonym">synonyms</Link> to
      view synonyms 🍫
    </div>
  </div>
);
