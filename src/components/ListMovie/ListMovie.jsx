import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { getMovies } from "../../services/SearchPagi";
import SearchMovie from "../SearchMovie";

export default function ListMovie() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [searchParams, setSearchPrams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const getListMovie = async ({ page, q }) => {
    const data = await getMovies({ page, q });
    if (data) {
      setTrendingMovies((prevMovies) =>
        page === 1 ? data.results : [...prevMovies, ...data.results]
      );
      setTotalPages(data.total_pages);
    }
  };

  // Xử lý tìm kiếm và reset danh sách phim
  useEffect(() => {
    setTrendingMovies([]); // Reset danh sách
    setCurrentPage(1); // Reset trang
    getListMovie({ page: 1, q: query });
  }, [keyword]);

  // Xử lý phân trang
  useEffect(() => {
    if (currentPage > 1) {
      getListMovie({ page: currentPage, q: keyword });
    }
  }, [currentPage]);

  const handleSearch = (searchKeyword) => {
    setKeyword(searchKeyword); // Cập nhật từ khóa
    if (searchKeyword === "") {
      setSearchPrams({});
    } else {
      setSearchPrams({ q: searchKeyword });
    }
  };

  const loadMoreMovie = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <SearchMovie query={query} onSearch={handleSearch}></SearchMovie>
      <div className="container mx-auto flex gap-x-2 gap-y-5 flex-wrap">
        {trendingMovies?.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <div
                style={{ width: "200px", height: "300px" }}
                className="relative overflow-hidden rounded-2xl border-2 border-transparent hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out group"
              >
                <img
                  className="w-full h-full object-cover"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt=""
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPlay size={50} className="text-white" />
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
              </div>
              <p className="mt-3 w-48">{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-center mt-5 pb-8">
        <button
          onClick={loadMoreMovie}
          className="border-white border-2 border-solid rounded-full bg-black px-6 py-2 hover:bg-white hover:text-red-500 duration-200"
        >
          Load more
        </button>
      </div>
    </>
  );
}
