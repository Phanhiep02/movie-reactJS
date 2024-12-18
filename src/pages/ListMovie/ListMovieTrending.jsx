import imgBg from "../../assets/img/footer-bg.jpg";

import ListMovie from "../../components/ListMovie/ListMovie";

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
        <div className="absolute lg:top-[24%] md:top-[16%] top-[20%] left-[40%] md:left-1/2 ">
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
