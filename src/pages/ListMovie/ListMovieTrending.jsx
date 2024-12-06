import imgBg from "../../assets/img/footer-bg.jpg";
import SearchMovie from "../../components/SearchMovie";

import ListMovie from "../../components/ListMovie/ListMovie";
import { getPopularMovie } from "../../services/MovieService";
export default function ListMovieTrending() {
  return (
    <>
      <div
        className="text-white"
        style={{ backgroundColor: "rgb(4 4 4 / 91%)" }}
      >
        <div
          className="relative w-full h-52 "
          style={{ backgroundImage: `url(${imgBg})`, top: "-60px" }}
        ></div>
        <div className="absolute top-[24%] left-1/2 ">
          {" "}
          <h1 className="text-center text-white text-2xl font-medium">
            Movies
          </h1>
        </div>

        <ListMovie></ListMovie>
      </div>
    </>
  );
}
