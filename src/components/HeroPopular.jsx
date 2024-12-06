import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useState } from "react";
import { getPopularMovie } from "../services/MovieService";
import ButtonTrailer from "./ButtonTrailer";
export default function HeroPopular() {
  const [mTrending, setmTrending] = useState([]);
  const getMovies = async () => {
    const movies = await getPopularMovie();

    setmTrending(movies.results);
  };
  useEffect(() => {
    getMovies();
  }, []);
  const popularMovies = mTrending.slice(1, 5);
  return (
    <>
      <Swiper
        className="relative "
        style={{ top: "-60px" }}
        slidesPerView={1}
        loop={false}
      >
        {popularMovies.map((popular) => {
          return (
            <SwiperSlide
              key={popular.id}
              className="relative bg-cover bg-center min-h-screen"
            >
              <div
                className="relative  bg-cover bg-center min-h-screen"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/original${popular.backdrop_path}")`,
                }}
              >
                {/* hero */}
                <div
                  style={{ top: "140px" }}
                  className="absolute  text-white container mx-auto"
                >
                  <div className="grid md:grid-cols-12 grid-cols-12 gap-14">
                    <div className="grid md:col-span-6 col-span-12">
                      <div className="md:mt-12 md:text-left text-center">
                        <h1
                          style={{ fontSize: "42px" }}
                          className="mb-2 font-bold "
                        >
                          {popular.original_title}
                        </h1>
                        <p className="mb-4 mt-14 text-lg">{popular.overview}</p>
                        <ButtonTrailer id={popular.id}></ButtonTrailer>
                      </div>
                    </div>
                    <div className=" md:grid hidden md:col-span-6 col-span-12">
                      <div>
                        <img
                          style={{ width: "400px", height: "500px" }}
                          className="object-cover rounded-lg"
                          src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
