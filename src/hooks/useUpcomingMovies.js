import { useEffect } from "react";
import { API_GET_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const response = await fetch(UPCOMING_MOVIES_URL, API_GET_OPTIONS);
    const json = await response.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies().catch((error) => console.log(error));
  }, []);
};

export default useUpcomingMovies;
