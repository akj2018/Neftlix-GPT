import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );

  useEffect(() => {
    // call if nowPlayingMovies is null in the store
    if (!nowPlayingMovies) {
      getNowPlayingMovies().catch((error) => console.log(error));
    }
  }, []);

  const getNowPlayingMovies = async () => {
    const requestUrl = `${process.env.REACT_APP_BACKEND_URL}/api/getNowPlayingMovies`;
    console.log(`Requesting URL: ${requestUrl}`); // Debugging line
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/getNowPlayingMovies`
    );
    const json = response.data;
    dispatch(addNowPlayingMovies(json?.results));
  };
};

export default useNowPlayingMovies;
