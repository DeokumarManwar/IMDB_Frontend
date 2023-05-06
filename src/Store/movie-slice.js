import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: null,
  },
  reducers: {
    addMovies(state, action) {
      state.allMovies = action.payload.allMovies;
    },
    removeMovies(state) {
      state.allMovies = null;
    },
  },
});

export const movieAction = movieSlice.actions;
export default movieSlice;
