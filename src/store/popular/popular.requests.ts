import { createAsyncThunk } from "@reduxjs/toolkit";
import githubApi from "../../api/GithubApi";

interface GetPopularReposParams {
    setSelectedLanguage: string;
    rejectWithValue: any;
}

export const getPopularRepos = createAsyncThunk(
    "players/getPopularRepos",
    async ({ setSelectedLanguage, rejectWithValue }: GetPopularReposParams) => {
        try {
            const response = await githubApi.getPopularRepos(setSelectedLanguage);
            return response.items;
        } catch (exception) {
            return rejectWithValue(exception);
        }
    }
);
