import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import axios from "axios";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((state) => state.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/getUpcomingMovies`
    );
    const json = response.data;
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
