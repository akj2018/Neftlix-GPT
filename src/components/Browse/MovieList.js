import MovieCard from "./MovieCard";

const MovieList = ({ title, listData }) => {
  if (!listData) return null;
  return (
    <div className="flex flex-col py-3">
      <p className="text-[0.8rem] font-semibold text-white lg:text-[1.3rem]">
        {title}
      </p>
      <div className="flex overflow-x-scroll gap-x-1 py-3 scroll-smooth no-scrollbar ">
        {listData.map((movieItem) => {
          const { id, title, poster_path } = movieItem;
          return <MovieCard key={id} imgFilePath={poster_path} title={title} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
