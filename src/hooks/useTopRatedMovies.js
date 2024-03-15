import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_GET_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies().catch((error) => console.log(error));
  }, []);

  const getTopRatedMovies = async () => {
    const response = await fetch(TOP_RATED_MOVIES_URL, API_GET_OPTIONS);
    const json = await response.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
