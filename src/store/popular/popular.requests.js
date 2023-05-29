import {createAsyncThunk} from "@reduxjs/toolkit";
import githubApi from "../../api/GithubApi";

export const getPopularRepos = createAsyncThunk(
  'players/getPopularRepos',
  async (setSelectedLanguage, { rejectWitchValue }) => {
    try {
      const response = await githubApi.getPopularRepos(setSelectedLanguage);
      return response.items;
    } catch (exception) {
      return rejectWitchValue(exception)
    }
  }
)
