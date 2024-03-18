import { useEffect } from "react";
import { NOW_PLAYING_MOVIES_URL, API_GET_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

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
    const response = await fetch(NOW_PLAYING_MOVIES_URL, API_GET_OPTIONS);
    const json = await response.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
};

export default useNowPlayingMovies;
