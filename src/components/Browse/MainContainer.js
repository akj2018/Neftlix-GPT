import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );

  if (!nowPlayingMovies) {
    return;
  }

  const backgroundMovie = nowPlayingMovies[0];
  const { id, title, overview } = backgroundMovie;
  console.log(id, title, overview);

  return (
    <div className="w-full min-h-[200px] bg-slate-800 relative px-4  flex items-center md:min-h-[40vw] lg:px-16 aspect-video">
      <div className="absolute right-[80vw] left-0 top-0 bottom-0  bg-gradient-to-r from-black z-[1]"></div>
      <div className="absolute right-0 left-0 top-[80vh] bottom-0  bg-gradient-to-t from-black z-[1]"></div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
