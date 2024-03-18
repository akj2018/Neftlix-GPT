import { useEffect } from "react";
import { API_GET_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const response = await fetch(UPCOMING_MOVIES_URL, API_GET_OPTIONS);
    const json = await response.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    // Call only if upcomingMovies is null in the store
    if (!upcomingMovies) {
      getUpcomingMovies().catch((error) => console.log(error));
    }
  }, []);
};

export default useUpcomingMovies;
