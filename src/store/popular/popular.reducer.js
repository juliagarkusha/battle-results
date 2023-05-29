import { createSlice } from "@reduxjs/toolkit";
import {getPopularRepos} from "./popular.requests";

export const popularSlice = createSlice({
  name: "popular",
  initialState: {
    selectedLanguage: 'All',
    loading: false,
    repos: [],
    error: null
  },
  reducers: {
    setSelectedLanguage: (state, action) => {
      state.selectedLanguage = action.payload
    },
    setRepos: (state, action) => {
      state.loading = false;
      state.repos = action.payload;
    },
    isLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    isError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPopularRepos.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getPopularRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.repos = action.payload;
    })
    builder.addCase(getPopularRepos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
})

export const {
  setSelectedLanguage,
  setRepos,
  isLoading,
  isError,
} = popularSlice.actions;

export default popularSlice.reducer;
