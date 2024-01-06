import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies:null,
    upcomingMovies:null,
    topRatedMovies:null
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopular: (state, action) => {
        state.popularMovies = action.payload;
      },
      addUpcoming: (state, action) => {
        state.upcomingMovies = action.payload;
      },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRated: (state, action) => {
        state.topRatedMovies = action.payload;
      },
  },
});
export const { addNowPlaying, addTrailerVideo, addPopular, addUpcoming, addTopRated } = MoviesSlice.actions;
export default MoviesSlice.reducer;
