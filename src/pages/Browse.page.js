import HeaderBrowse from "../components/Browse/Header.Browse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useAuthStateChange from "../hooks/useAuthStateChange";
import MainContainer from "../components/Browse/MainContainer";
import SecondaryContainer from "../components/Browse/SecondaryContainer";

const BrowsePage = () => {
  useNowPlayingMovies();
  useAuthStateChange();

  return (
    <div className="bg-black overflow-y-auto min-h-[120vh]">
      <HeaderBrowse />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default BrowsePage;
