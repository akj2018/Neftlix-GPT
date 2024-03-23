import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import axios from "axios";

const useMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);
  const dispatch = useDispatch();

  const getMovieTrailer = useCallback(async () => {
    const requestUrl = `${process.env.REACT_APP_BACKEND_URL}/api/getMovieVideos?movieId=${movieId}`;
    // Fetch the Now Playing
    const response = await axios.get(requestUrl);
    const json = response.data;

    // Filter videos which are type "Trailer"
    const availTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );

    // Decide which video to serve as trailer
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
