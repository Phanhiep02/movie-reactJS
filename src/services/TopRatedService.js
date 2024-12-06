import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const getTopRatedMovie = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en`
    );

    return response.data.results;
  } catch (error) {
    console.log("ko lay duoc top rated");
    return false;
  }
};
export const getTopRatedTv = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en`
    );

    return response.data.results;
  } catch (error) {
    console.log("ko lay duoc top rated");
    return false;
  }
};
