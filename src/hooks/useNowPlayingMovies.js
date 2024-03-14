import { useEffect } from "react";
import { NOW_PLAYING_MOVIES_URL, API_GET_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies().catch((error) => console.log(error));
  }, []);

  const getNowPlayingMovies = async () => {
    const response = await fetch(NOW_PLAYING_MOVIES_URL, API_GET_OPTIONS);
    const json = await response.json();
    dispatch(addNowPlayingMovies(json?.results));
  };
};

export default useNowPlayingMovies;
