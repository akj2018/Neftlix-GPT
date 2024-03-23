import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import axios from "axios";

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
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/getTopRatedMovies`
    );
    const json = response.data;
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
