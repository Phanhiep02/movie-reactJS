import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link, useSearchParams } from "react-router-dom";
import { getMovieTv } from "../../services/SearchPagi";

export default function ListTv() {
  const [listTv, setListTv] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchPrams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const onChangeValueSearch = (e) => {
    setKeyword(e.target.value);
    if (e.target.value === "") {
      setSearchPrams({});
    } else {
      setSearchPrams({ q: e.target.value });
    }
  };
  const getListTv = async ({ page, q }) => {
    const data = await getMovieTv({ page, q });
    if (data) {
      setListTv(page === 1 ? data : [...listTv, ...data]);
    }
  };
  // Xử lý tìm kiếm và reset danh sách phim
  useEffect(() => {
    setListTv([]); // Reset danh sách
    setCurrentPage(1); // Reset trang
    getListTv({ page: 1, q: query });
  }, [keyword]);

  // Xử lý phân trang
  useEffect(() => {
    if (currentPage > 1) {
      getListTv({ page: currentPage, q: keyword });
    }
  }, [currentPage]);
  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };
  console.log("query params", keyword);
  // console.log("current", currentPage);

  return (
    <>
      {/* SEARCH */}
      <div className="container mx-auto pb-20 ">
        <input
          onChange={onChangeValueSearch}
          className="rounded-full pl-3 pr-9 outline-none bg-black py-1"
          type="search"
          placeholder="Search "
          style={{ width: "300px" }}
          value={query === "" ? keyword : query}
        />
        <button
          style={{ left: "-20px" }}
          className="relative rounded-full bg-red-500 w-24 py-1"
        >
          Search
        </button>
      </div>
      {/* list */}
      <div className="container mx-auto flex gap-x-2 gap-y-5 flex-wrap">
        {listTv?.map((tv, index) => {
          return (
            <div key={`${tv.id}-${index}`}>
              <Link to={`/tv-series/${tv.id}`}>
                <div
                  style={{ width: "200px", height: "300px" }}
                  className="relative overflow-hidden rounded-2xl border-2 border-transparent hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out group"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
                    alt=""
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPlay size={50} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                </div>
                <p className="mt-3 w-48">{tv.original_name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      {/* load more */}
      <div className="text-center mt-5 pb-8">
        <button
          onClick={handleLoadMore}
          className="border-white border-2 border-solid rounded-full bg-black px-6 py-2 hover:bg-white hover:text-red-500 duration-200"
        >
          Load more
        </button>
      </div>
    </>
  );
}
