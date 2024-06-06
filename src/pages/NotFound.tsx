import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[50%] flex flex-col gap-6 p-6 items-center justify-center">
      <div className="text-9xl">404</div>
      <span className="text-xl">
        that route doesn't exist 🥹
      </span>
      <button
        onClick={() => navigate(-1)}
        className="border border-yellow-700 p-3 rounded bg-yellow-500 text-zinc-50"
      >
        ← Go back
      </button>
    </div>
  );
};
