import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const nav = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[300px] h-[70vh] flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-4xl font-semibold">Page not found ...</p>
      <button
        onClick={() => nav("/")}
        className="text-xl border-2 border-black rounded-md px-4 py-2"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
