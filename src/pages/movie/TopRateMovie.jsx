import { FaPlay } from "react-icons/fa";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import BViewTrend from "../../components/Button/BViewTrend";
import { useEffect, useState } from "react";
import { getTopRatedMovie } from "../../services/TopRatedService";
import { Link } from "react-router-dom";

export default function TopRateMovie() {
  const [topMovies, setTopMovies] = useState([]);
  const getTopMovies = async () => {
    const data = await getTopRatedMovie();
    setTopMovies(data);
  };
  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">Top rated movie</h2>
          <BViewTrend></BViewTrend>
        </div>
        {/* list */}
        <div className="mt-4 flex items-center gap-4">
          {/* item */}
          <Swiper
            breakpoints={{
              320: { slidesPerView: 2.1, spaceBetween: 20 }, // Màn hình nhỏ (điện thoại)
              640: { slidesPerView: 2.3, spaceBetween: 20 }, // Tablet
              768: { slidesPerView: 3.5, spaceBetween: 20 }, // Tablet ngang
              1024: { slidesPerView: 4.5, spaceBetween: 20 }, // Laptop
              1280: { slidesPerView: 5.5, spaceBetween: 20 }, // Desktop lớn
            }}
            style={{ padding: "0 100px 0 0" }}
          >
            {topMovies.map((topMovie) => {
              return (
                <SwiperSlide
                  style={{ marginRight: "10px", width: "250px" }}
                  key={topMovie.id}
                >
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    to={`/movie/${topMovie.id}`}
                    style={{ width: "200px" }}
                  >
                    <div>
                      <div
                        style={{ width: "100%", height: "300px" }}
                        className="relative overflow-hidden rounded-2xl border-2 border-transparent hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out group"
                      >
                        <img
                          className="w-full h-full object-cover"
                          src={`https://image.tmdb.org/t/p/original/${topMovie.poster_path}`}
                          style={{ aspectRatio: "2 / 3" }}
                          alt=""
                        />

                        {/* Icon Play */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <FaPlay size={50} className="text-white" />
                        </div>

                        {/* Box Shadow on Hover */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                      </div>
                    </div>
                  </Link>
                  <p style={{ width: "200px" }} className="mt-3">
                    {topMovie.original_title}
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
