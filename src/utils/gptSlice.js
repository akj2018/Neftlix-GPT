import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchStatus: false,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.gptSearchStatus = !state.gptSearchStatus;
    },
  },
});

export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
