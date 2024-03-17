import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  // Subscribe to movie slice from Redux Store
  const movies = useSelector((state) => state.movies);

  if (!movies) return null;

  // Render Movie Lists based on categories and list items (20 each)
  return (
    <div className="w-full text-white min-h-[500px] bg-[#141414] px-4 lg:pl-16 pr-0  z-[2] absolute pb-16">
      <div className=" -mt-[2rem] md:-mt-[5rem]  lg:-mt-[8rem] xl:-mt-[15rem] overflow-x-hidden">
        <MovieList title={"Now Playing"} listData={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} listData={movies?.popularMovies} />
        <MovieList title={"Top Rated"} listData={movies?.topRatedMovies} />
        <MovieList title={"Upcoming"} listData={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
