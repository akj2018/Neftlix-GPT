import { useCallback, useEffect, useState } from "react";
import { API_GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);
  const dispatch = useDispatch();

  const getMovieTrailer = useCallback(async () => {
    // Fetch the Now Playing
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_GET_OPTIONS
    );

    const json = await response.json();
    const availTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      availTrailers.length === 0 ? json.results[0] : availTrailers[0];
    dispatch(addTrailerVideo(trailer));
    setTrailer(trailer);
  }, [movieId]);

  useEffect(() => {
    getMovieTrailer().catch((error) => console.log(error));
  }, [getMovieTrailer]);

  return trailer;
};

export default useMovieTrailer;
