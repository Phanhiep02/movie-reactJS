import { Link, NavLink, useLocation } from "react-router-dom";
import TmovieImage from "../../assets/img/tmovie.png";

export default function HeaderSub() {
  const location = useLocation();

  const isActiveMovie = location.pathname.startsWith("/movie");
  const isActiveTVSeries = location.pathname.startsWith("/tv-series");

  return (
    <>
      <div
        style={{ background: "rgba(0, 0, 0, 0.1)" }}
        className="sticky top-0 pb-2 z-10"
      >
        <div className="container mx-auto flex md:justify-between pt-3 items-center justify-center">
          <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={"/"}
          >
            <div className="gap-1 items-center flex cursor-pointer">
              <img className="w-9 h-9" src={TmovieImage} alt="" />
              <div>
                <span className="text-4xl font-bold text-white">tMovie</span>
              </div>
            </div>
          </Link>
          {/* navbar */}
          <div className="md:block hidden">
            <ul className="flex items-center gap-7 text-white">
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  end
                  className={({ isActive }) =>
                    `text-lg font-medium ${isActive ? "text-red-500" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movie"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className={`text-lg font-medium ${
                    isActiveMovie ? "text-red-500" : ""
                  }`}
                >
                  Movie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tv-series"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className={`text-lg font-medium ${
                    isActiveTVSeries ? "text-red-500" : ""
                  }`}
                >
                  TV Series
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
