import { Link } from "react-router-dom";

export default function BviewTV() {
  return (
    <>
      {" "}
      <Link
        className="border-2 border-white border-solid rounded-full px-10 py-2 text-white transition-all duration-300 ease-in-out transform hover:bg-white hover:text-red-500 hover:shadow-xl hover:scale-110"
        to={"/tv-series"}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        View all
      </Link>
    </>
  );
}
