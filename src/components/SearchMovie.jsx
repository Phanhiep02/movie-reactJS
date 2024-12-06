import { debounce } from "lodash";
import { useCallback } from "react";
export default function SearchMovie({ onSearch, query }) {
  const handleDebouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 200),
    [onSearch]
  );

  const handleInputChange = (e) => {
    const value = e.target.value;

    handleDebouncedSearch(value);
  };

  return (
    <>
      <div className="  container mx-auto pb-20 ">
        <div className="relative" style={{ width: "300px" }}>
          <input
            onChange={handleInputChange}
            className=" rounded-full w-full pl-3 pr-12 outline-none bg-black py-1"
            type="search"
            placeholder="Search "
          />
          <button
            style={{ right: 0 }}
            className="absolute  rounded-full bg-red-500 w-24 py-1"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}
