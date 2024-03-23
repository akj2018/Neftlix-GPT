import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageContants";
import { useRef, useState } from "react";
import gptSearchResults from "../../utils/gptSearchResults";
import getMovieInfo from "../../utils/getMovieInfo";
import { addGptMovies } from "../../utils/gptSlice";

const GptSearchBar = () => {
  const pageLang = useSelector((state) => state.config.lang);
  const moviesInfoList = useSelector((state) => state.gpt.moviesInfoList);
  const searchText = useRef("");
  const [inputValidMsg, setInputValidMsg] = useState(null);
  const dispatch = useDispatch();

  const searchBtnHandler = () => {
    const query = searchText.current.value;

    if (query === "" || query === undefined) {
      setInputValidMsg(
        "Enter valid suggestion. (Eg. funny indian retro movies)"
      );
      dispatch(addGptMovies({ moviesTitle: [], moviesInfo: [] }));
      return;
    }

    gptSearchResults(query)
      .then((searchResult) => {
        let searchResultContent = searchResult?.choices[0]?.message?.content;
        if (
          searchResultContent === undefined ||
          searchResultContent === "none"
        ) {
          setInputValidMsg(
            "No results found. Try a different suggestion (Eg. funny indian retro movies)"
          );
        } else {
          setInputValidMsg(null);
          const moviesTitleList = searchResultContent
            .split(",")
            .map((movieTitle) => movieTitle.trim());
          fetchMoviesInfo(moviesTitleList);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(addGptMovies({ moviesTitle: [], moviesInfo: [] }));
        setInputValidMsg("Something went wrong. Try again later.");
      });
  };

  const cleanMovieList = (movieList) => {
    return movieList.filter(
      (movieListItem) => movieListItem.poster_path !== null
    );
  };

  const fetchMoviesInfo = async (moviesTitleList) => {
    let moviesInfoList = moviesTitleList.map((movieTitle) =>
      getMovieInfo(movieTitle)
    );
    moviesInfoList = await Promise.all(moviesInfoList);
    moviesInfoList = moviesInfoList.map((moviesList) =>
      cleanMovieList(moviesList)
    );
    dispatch(
      addGptMovies({ moviesTitle: moviesTitleList, moviesInfo: moviesInfoList })
    );
  };

  // console.log(moviesInfoList);

  return (
    <div className="w-full sm:w-[60%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-x-3 md:flex-row gap-y-9 w-full justify-center items-center sm:items-stretch sm:flex-row"
      >
        <div className="w-[75%] md:w-[60%] relative">
          <input
            placeholder={lang[pageLang].gptSearchPlaceholder}
            type="text"
            ref={searchText}
            className="w-full placeholder-neutral-400 py-3 px-3  text-white rounded-[4px] bg-[#00000072] border-[1px] border-neutral-600 focus:border-white text-[0.75rem] md:text-base "
          ></input>
          <p className="text-[#e87c03] text-[0.7rem]  md:text-sm mb-4 absolute left-0 bg-[#00000052] py-1 md:py-2 px-1 rounded-lg ">
            {inputValidMsg}
          </p>
        </div>

        <button
          onClick={searchBtnHandler}
          type="submit"
          className="bg-[rgb(193,17,17)] hover:bg-[rgb(170,15,15)] py-2 w-[20%] brightness-105 text-white rounded-[4px] text-[0.75rem] tracking-wide md:text-base md:w-[15%]"
        >
          {lang[pageLang].searchBtnText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
