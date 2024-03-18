import { API_GET_OPTIONS, MOVIE_SEARCH_URL } from "./constants";

const getMovieInfo = async (movieTitle) => {
  const response = await fetch(MOVIE_SEARCH_URL(movieTitle), API_GET_OPTIONS);
  const json = await response.json();
  return json?.results;
};

export default getMovieInfo;
