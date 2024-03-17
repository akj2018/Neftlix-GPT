import HeaderBrowse from "../components/Browse/Header.Browse";
import useAuthStateChange from "../hooks/useAuthStateChange";
import { GPT_SEARCH_PAGE_BG_URL } from "../utils/constants";
import GptSearchSuggestion from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearchPage = () => {
  // Track changes in user auth state, prevent routes from unsafe access
  useAuthStateChange("/gpt");

  return (
    <div className="overflow-y-auto min-h-[120vh] bg-black">
      <HeaderBrowse />

      <div className="absolute top-0 left-0 right-0 bottom-[80vh] bg-gradient-to-b from-black z-[1]"></div>
      <div className="absolute top-0 left-[85vw] right-0 bottom-0 bg-gradient-to-l from-[#00000097] z-[1]"></div>
      <div className="absolute top-0 left-0 right-[85vw] bottom-0 bg-gradient-to-r from-[#00000097] z-[1]"></div>
      <div className="absolute top-[80vh] left-0 right-0 bottom-0 bg-gradient-to-t from-black z-[1]"></div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full
        
        bg-no-repeat
        brightness-[0.3]"
      >
        <img
          className="object-cover h-full w-full"
          alt="bg-img"
          src={GPT_SEARCH_PAGE_BG_URL}
        />
      </div>

      <div className="w-full flex relative h-screen justify-center pt-[7rem] z-[2] md:pt-[10rem]">
        <GptSearchBar />
      </div>
      <div className="w-full flex relative min-h-[50rem] mt-[-20rem]  z-[2]">
        <GptSearchSuggestion />
      </div>
    </div>
  );
};

export default GPTSearchPage;
