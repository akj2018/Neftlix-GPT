const getMovieInfo = async (movieTitle) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/getMovieInfo?movieTitle=${movieTitle}`
  );
  const json = await response.json();
  return json?.results;
};

export default getMovieInfo;
