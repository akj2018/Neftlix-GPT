import { useDispatch } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { addTrailerVideo } from "../../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieTrailer = useMovieTrailer(movieId);

  if (movieTrailer !== null) {
    dispatch(addTrailerVideo(movieTrailer));
  }

  if (movieTrailer === null) return null;

  return (
    <div className="absolute top-[-vh] bottom-0 -left-[10vw] right-0 pointer-events-none overflow-hidden">
      <iframe
        className="w-[120vw] aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer.key}?si=gffpOQuNhNhhQcaq&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
