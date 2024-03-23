async function getSearchResults(query) {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_URL}/api/getOpenAi?query=${query}`
  );
  const data = await response.json();
  return data;
}

export default getSearchResults;
