import HeaderBrowse from "../components/Browse/Header.Browse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useAuthStateChange from "../hooks/useAuthStateChange";
import MainContainer from "../components/Browse/MainContainer";
import SecondaryContainer from "../components/Browse/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const BrowsePage = () => {
  // Custom hook fetches "Now Playing" movies (20 items) via TMDB API & store in Redux store
  useNowPlayingMovies();

  //  Custom hook fetches "Popular" movies (20 items) via TMDB API & store in Redux store
  usePopularMovies();

  // Custom Hook fetches "Top Rated" movies (20 items) via TMDB API & store in Redux store
  useTopRatedMovies();

  // Custom Hook fetches "Upcoming" movies (20 items) via TMDB API & store in Redux store
  useUpcomingMovies();

  // Track changes in user auth state, prevent routes from unsafe access
  useAuthStateChange();

  return (
    <div className="bg-black overflow-y-auto min-h-[120vh]">
      <HeaderBrowse />

      {/* Main Container - Background Video + Title + Description + Buttons */}
      <MainContainer />

      {/* Movie Lists with Title */}
      <SecondaryContainer />
    </div>
  );
};

export default BrowsePage;
