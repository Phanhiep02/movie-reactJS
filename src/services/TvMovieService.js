import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const getTvTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en`
    );
    return response.data.results;
  } catch (error) {
    console.log("khong lay duoc tv");
    return false;
  }
};
export const getTvDetail = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en`
    );

    return response.data;
  } catch (error) {
    console.log("khong lay duoc tv detail");
    return false;
  }
};
export const getCastTv = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}&language=en`
    );

    return response.data.cast;
  } catch (error) {
    console.log("ko lay duoc cast");
    return false;
  }
};
export const getTrailerTv = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en`
    );
    return response.data.results;
  } catch (error) {
    console.log("ko lay duoc trailer");
    return false;
  }
};
export const getSimilarTv = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}&language=en`
    );
    return response.data.results;
  } catch (error) {
    console.log("ko lay duoc trailer");
    return false;
  }
};
