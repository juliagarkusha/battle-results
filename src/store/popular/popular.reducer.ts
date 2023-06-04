import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPopularRepos } from "./popular.requests";

interface PopularState {
  selectedLanguage: string;
  loading: boolean;
  repos: any[];
  error: any | null;
}

const initialState: PopularState = {
  selectedLanguage: 'All',
  loading: false,
  repos: [],
  error: null
};

export const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setSelectedLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
    setRepos: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.repos = action.payload;
    },
    isLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    isError: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPopularRepos.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPopularRepos.fulfilled, (state, action) => {
      state.loading = false;
      state.repos = action.payload;
    });
    builder.addCase(getPopularRepos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {
  setSelectedLanguage,
  setRepos,
  isLoading,
  isError,
} = popularSlice.actions;

export default popularSlice.reducer;
