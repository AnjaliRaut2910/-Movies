import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApiKey, { APIKey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";
import { error } from "console";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
  const movieText = "Harry";
  
  const response = await movieApi.get(
    `?apikey=${APIKey}&s=${movieText}&type=movie`
  );
  return response.data;
});
const initialState = {
  movies: {},
  loading:false,
  error:null
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fetched Successfully");
        state.loading = false;
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state, { error }) => {
        console.log("Rejected");
        state.loading = false;
        state.error = error.message;
      });
  },
});
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
