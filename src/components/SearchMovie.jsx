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
      <div className="container mx-auto pb-20 ">
        <input
          onChange={handleInputChange}
          className="rounded-full pl-3 pr-9 outline-none bg-black py-1"
          type="search"
          placeholder="Search "
          style={{ width: "300px" }}
          // value={query}
        />
        <button
          style={{ left: "-20px" }}
          className="relative rounded-full bg-red-500 w-24 py-1"
        >
          Search
        </button>
      </div>
    </>
  );
}
