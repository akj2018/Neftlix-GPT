import { useCallback, useEffect, useState } from "react";
import { API_GET_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);

  const getMovieTrailer = useCallback(async () => {
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
    setTrailer(trailer);
  }, [movieId]);

  useEffect(() => {
    getMovieTrailer().catch((error) => console.log(error));
  }, [getMovieTrailer]);

  return trailer;
};

export default useMovieTrailer;
