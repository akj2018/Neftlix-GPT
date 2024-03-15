import { useDispatch } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { addTrailerVideo } from "../../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();

  // Get the movie trailer object from custom hook for a particular movie id
  const movieTrailer = useMovieTrailer(movieId);

  if (!movieTrailer) return null;

  // use the key from movieTrailer object to render the embedded YT video (mute, autoplay, no controls, modestBranding, loop)
  return (
    <div className="absolute top-[-8vh] bottom-0 -left-[10vw] right-0 pointer-events-none overflow-hidden md:top-[-30vh]  ">
      <iframe
        className=" w-[140vw]  aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer.key}?si=gffpOQuNhNhhQcaq&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
