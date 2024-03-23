import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((state) => state.movies.popularMovies);

  const getPopularMovies = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/getPopularMovies`
    );
    const json = response.data;
    dispatch(addPopularMovies(json?.results));
  };

  useEffect(() => {
    // Call only if popularMovies is null in the store
    if (!popularMovies) {
      getPopularMovies().catch((error) => console.log(error));
    }
  }, []);
};

export default usePopularMovies;
