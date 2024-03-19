const express = require("express");
const cors = require("cors");
const { OpenAI } = require("openai");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Replace 'your-app-domain.com' with actual domain for React app
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const TMBD_API_GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_READ_ACCESS_TOKEN,
  },
};

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

const GPT_PROMPT_TEMPLATE = (query) =>
  `Act as a Movie Recommendation system and suggest latest movies for the following query on Netflix, "${query}".Generate only the names of 5 most popular movies in a comma sperated format specified in the example. Example format : Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. If no movies are found or prompt is invalid, strictly return "none".`;

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ name: "Akshay Jain" });
});

app.get("/api/getFirebaseConfig", (req, res) => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "netflixgpt-d2ba6.firebaseapp.com",
    projectId: "netflixgpt-d2ba6",
    storageBucket: "netflixgpt-d2ba6.appspot.com",
    messagingSenderId: "201464968625",
    appId: "1:201464968625:web:7456cb52908100d1b73990",
    measurementId: "G-CGG1NFY3D7",
  };

  res.json(firebaseConfig);
});

app.get("/api/getNowPlayingMovies", async (req, res) => {
  const NOW_PLAYING_MOVIES_URL =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

  try {
    const response = await fetch(NOW_PLAYING_MOVIES_URL, TMBD_API_GET_OPTIONS);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to now playing movies:", error);
    res.status(500).send("Failed to fetch now playing movies");
  }
});

app.get("/api/getPopularMovies", async (req, res) => {
  const POPULAR_MOVIES_URL =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  try {
    const response = await fetch(POPULAR_MOVIES_URL, TMBD_API_GET_OPTIONS);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch popular movies:", error);
    res.status(500).send("Failed to fetch popular movies");
  }
});

app.get("/api/getTopRatedMovies", async (req, res) => {
  const TOP_RATED_MOVIES_URL =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  try {
    const response = await fetch(TOP_RATED_MOVIES_URL, TMBD_API_GET_OPTIONS);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch top rated movies:", error);
    res.status(500).send("Failed to fetch top rated movies");
  }
});

app.get("/api/getUpcomingMovies", async (req, res) => {
  const UPCOMING_MOVIES_URL =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  try {
    const response = await fetch(UPCOMING_MOVIES_URL, TMBD_API_GET_OPTIONS);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch upcoming movies:", error);
    res.status(500).send("Failed to fetch upcoming movies");
  }
});

app.get("/api/getMovieVideos", async (req, res) => {
  const movieId = req.query?.movieId;

  if (!movieId) {
    // If movieId is not provided, send an error response
    return res.status(400).send("movieId is required");
  }

  const MOVIE_VIDEO_URL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  try {
    const response = await fetch(MOVIE_VIDEO_URL, TMBD_API_GET_OPTIONS);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch movie videos:", error);
    res.status(500).send("Failed to fetch movie videos");
  }
});

app.get("/api/getMovieInfo", async (req, res) => {
  const movieTitle = req.query?.movieTitle;

  if (!movieTitle) {
    return res.status(400).send("movieTitle is required");
  }

  const MOVIE_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await fetch(MOVIE_SEARCH_URL, TMBD_API_GET_OPTIONS);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch movie info:", error);
    res.status(500).send("Failed to fetch movie info");
  }
});

app.get("/api/getMovieInfo", async (req, res) => {
  const movieTitle = req.query?.movieTitle;

  if (!movieTitle) {
    return res.status(400).send("movieTitle is required");
  }

  const MOVIE_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await fetch(MOVIE_SEARCH_URL, TMBD_API_GET_OPTIONS);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch movie info.", error);
    res.status(500).send("Failed to fetch movie info.");
  }
});

app.get("/api/getOpenAi", async (req, res) => {
  const query = req.query?.["query"];

  if (!query) {
    return res.status(400).send("A valid query is required");
  }

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: GPT_PROMPT_TEMPLATE(query) }],
      model: "gpt-4",
    });
    res.json(chatCompletion);
  } catch (error) {
    console.error("Failed to fetch gpt response.", error);
    res.status(500).send("Failed to fetch gpt response.");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
