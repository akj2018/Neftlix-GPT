import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_GET_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);

  useEffect(() => {
    // Call only if topRatedMovies is null in the store
    if (!topRatedMovies) {
      getTopRatedMovies().catch((error) => console.log(error));
    }
  }, []);

  const getTopRatedMovies = async () => {
    const response = await fetch(TOP_RATED_MOVIES_URL, API_GET_OPTIONS);
    const json = await response.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
