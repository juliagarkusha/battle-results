import { createAsyncThunk } from "@reduxjs/toolkit";
import GithubApi from "../../api/GithubApi";

export const getPlayer1 = createAsyncThunk(
    "players/getPlayer1",
    async (name: string, { rejectWithValue }) => {
        try {
            return await GithubApi.getUser(name);
        } catch (exception) {
            return rejectWithValue(exception);
        }
    }
);

export const getPlayer2 = createAsyncThunk(
    "players/getPlayer2",
    async (name: string, { rejectWithValue }) => {
        try {
            return await GithubApi.getUser(name);
        } catch (exception) {
            return rejectWithValue(exception);
        }
    }
);

export const getPlayers = createAsyncThunk(
    "players/getPlayers",
    async (names: string[], { rejectWithValue }) => {
        try {
            return await GithubApi.getUsers(names);
        } catch (exception) {
            return rejectWithValue(exception);
        }
    }
);

export const getRepos = createAsyncThunk(
    "players/getRepos",
    async (players: any[], { rejectWithValue }) => {
        try {
            const response = await GithubApi.getPlayersRepos(players.map(player => player.login));
            return response.repos;
        } catch (exception) {
            return rejectWithValue(exception);
        }
    }
);
