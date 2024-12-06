import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const getPopularMovie = async ({ page = 2 } = {}) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en&page=${page}`
    );

    return response.data;
  } catch (error) {
    console.log("ko lay duoc popular");
    return false;
  }
};
export const getPopularTrailer = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en`
    );
    return response.data.results;
  } catch (error) {
    console.log("ko lay duoc id");
    return false;
  }
};
export const getPopularDetail = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en`
    );
    // console.log(response);

    return response.data;
  } catch (error) {
    console.log("ko lay duoc id detail");
    return false;
  }
};
export const getCastsTrending = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.log("ko lay duoc casts");
    return false;
  }
};
export const getSimilarMovie = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    console.log("ko lay duoc similar");
    return false;
  }
};
