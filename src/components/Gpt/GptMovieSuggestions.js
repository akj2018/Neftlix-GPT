import { useSelector } from "react-redux";
import MovieList from "../Browse/MovieList";

const GptSearchSuggestion = () => {
  // Subscribe to the store to get Suggested movies details (results, titles)
  const { gptMoviesInfoList, gptMoviesTitleList } = useSelector(
    (state) => state.gpt
  );

  // Show Nothing or No search results
  if (!gptMoviesTitleList) return null;

  return (
    <div className="w-full text-white min-h-[0] px-4 lg:pl-16 pr-0 pb-16">
      <div className="overflow-x-hidden">
        {gptMoviesTitleList.map((movieTitle, index) => {
          return (
            <MovieList
              key={movieTitle}
              title={movieTitle}
              listData={gptMoviesInfoList[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptSearchSuggestion;
