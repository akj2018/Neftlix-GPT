import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchStatus: false,
    gptMoviesTitleList: [],
    gptMoviesInfoList: [],
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchStatus = !state.gptSearchStatus;
    },
    addGptMovies: (state, action) => {
      const { moviesTitle, moviesInfo } = action.payload;
      state.gptMoviesTitleList = moviesTitle;
      state.gptMoviesInfoList = moviesInfo;
    },
  },
});

export const { toggleGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
