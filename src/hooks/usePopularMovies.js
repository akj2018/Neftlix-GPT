import { useEffect } from "react";
import { API_GET_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const response = await fetch(POPULAR_MOVIES_URL, API_GET_OPTIONS);
    const json = await response.json();
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    getPopularMovies().catch((error) => console.log(error));
  }, []);
};

export default usePopularMovies;
