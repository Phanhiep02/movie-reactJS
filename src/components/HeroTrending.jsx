import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastsTrending, getPopularDetail } from "../services/MovieService";

export default function HeroTrending() {
  const { id } = useParams();
  const [trendingMovie, setTrendingMovie] = useState({});
  const [trendingCasts, setTrendingCasts] = useState({});
  const getDetail = async () => {
    const data = await getPopularDetail(id);

    setTrendingMovie(data);
  };
  const getCasts = async () => {
    const data = await getCastsTrending(id);

    setTrendingCasts(data);
  };
  useEffect(() => {
    getDetail();
    getCasts();
  }, [id]);
  const genres = trendingMovie?.genres;
  const casts = trendingCasts?.cast?.slice(0, 7);

  const img =
    "https://image.tmdb.org/t/p/original/yh64qw9mgXBvlaWDi7Q9tpUBAvH.jpg";
  const bg =
    "https://image.tmdb.org/t/p/original/tElnmtQ6yz1PjN1kePNl8yMSb59.jpg";
  return (
    <>
      <div>
        <div
          className="relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}")`,
            top: "-60px",
            filter: "blur(3px)",
          }}
        ></div>
        <div
          // style={{ top: "230px" }}
          className="absolute lg:top-[108px] top-[70px] lg:gap-24  left-0 container mx-auto grid lg:gird-cols-12 grid-cols-12 place-items-center "
        >
          <div
            className=" gird lg:col-start-3 lg:col-span-3 md:block hidden col-span-12"
            style={{ width: "270px", height: "470px" }}
          >
            <img
              className="w-full h-full rounded-2xl "
              src={`https://image.tmdb.org/t/p/original${trendingMovie.poster_path}`}
              alt=""
            />
          </div>
          <div className="grid lg:col-span-6 w-[500px] col-start-4 col-span-8">
            <h2 style={{ fontWeight: "600" }} className="text-5xl mb-2 ">
              {trendingMovie.original_title}
            </h2>
            <div className="flex gap-2 mb-3">
              {genres?.map(({ name, id }) => {
                return (
                  <div
                    style={{ width: "140px" }}
                    key={id}
                    className="text-lg border-2 border-white rounded-full w-24 h-10 cursor-default flex items-center justify-center bg-black "
                  >
                    {name}
                  </div>
                );
              })}
            </div>
            <p className="text-lg font-normal">{trendingMovie.overview}</p>
            <div>
              <h3 className="text-2xl font-semibold">Cast</h3>
              <div className="flex items-center flex-wrap gap-y-12 gap-x-4">
                {casts?.map((cast) => {
                  return (
                    <div
                      style={{ width: "90px", height: "106px" }}
                      key={cast.id}
                    >
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                        alt=""
                      />
                      <h4 style={{ width: "100px" }} className="text-sm">
                        {cast.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
