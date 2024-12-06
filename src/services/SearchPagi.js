import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
// search pagi movie
export const getMovies = async ({ page = 2, q = "" } = {}) => {
  try {
    let queryString = "";
    if (q) {
      queryString = `&query=${q}`;
      const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en&page=${page}${queryString}`
      );
      console.log("query", response.data);

      return response.data;
    } else {
      const response = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en&page=${page}`
      );
      console.log("default", response.data);
      return response.data;
    }
  } catch (error) {
    console.log("ko lay duoc popular");
    return false;
  }
};
// search pagi Tv
export const getMovieTv = async ({ page = 1, q = "" } = {}) => {
  try {
    let queryString = "";
    if (q) {
      queryString = `&query=${q}`;
      const response = await axios.get(
        `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en&page=${page}${queryString}`
      );
      console.log("query", response.data);
      return response.data.results;
    } else {
      const response = await axios.get(
        `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en&page=${page}`
      );
      console.log("ko query", response.data);

      return response.data.results;
    }
  } catch (error) {
    console.log("ko lay duoc list tv");
    return false;
  }
};
