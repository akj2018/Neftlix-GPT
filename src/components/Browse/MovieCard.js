import { TMDB_BASE_IMG_URL } from "../../utils/constants";

const MovieCard = ({ imgFilePath, title }) => {
  return (
    <div className="min-w-[12rem] h-[7rem] bg-neutral-500 text-black  rounded-sm overflow-hidden box lg:h-[13rem] lg:min-w-[rem]">
      <div className="absolute top-0 bottom-0 left-0 right-0 shadow-moviecard hover:shadow-none"></div>

      <img
        className="h-full w-full object-cover "
        alt={title + "-bg-img"}
        src={TMDB_BASE_IMG_URL + imgFilePath}
      />
    </div>
  );
};

export default MovieCard;
