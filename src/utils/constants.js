export const NETFLIX_LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON_URL =
  "https://occ-0-37-3996.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const TMDB_READ_ACCESS_TOKEN =
  process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN;

export const NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const API_GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN,
  },
};

export const TMDB_BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MOVIE_SEARCH_URL = (movieTitle) =>
  `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;

export const GPT_SEARCH_PAGE_BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/1c01ae52-0a90-41c5-a3ab-2736447a92ed/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { name: "English", id: "english" },
  { name: "Español", id: "spanish" },
  { name: "हिंदी", id: "hindi" },
  { name: "中国人", id: "chinese" },
];

export const GPT_PROMPT_TEMPLATE = (query) =>
  `Act as a Movie Recommendation system and suggest some movies for the query, "${query}".Generate only the names of 5 movies in a comma sperated format specified in the example. Example format : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. If no movies are found or prompt is invalid, strictly return "none".`;

// WARNING: Keep this key as a secret
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
