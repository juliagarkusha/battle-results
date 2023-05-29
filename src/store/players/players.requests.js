import { createAsyncThunk } from "@reduxjs/toolkit";
import GithubApi from "../../api/GithubApi";

export const getPlayer1 = createAsyncThunk(
  'players/getPlayer1',
  async (name, { rejectWitchValue }) => {
    try {
      return await GithubApi.getUser(name);
    } catch (exception) {
      return rejectWitchValue(exception)
    }
  }
)

export const getPlayer2 = createAsyncThunk(
  'players/getPlayer2',
  async (name, { rejectWitchValue }) => {
    try {
      return await GithubApi.getUser(name);
    } catch (exception) {
      return rejectWitchValue(exception)
    }
  }
)

export const getPlayers = createAsyncThunk(
  'players/getPlayers',
  async (names, { rejectWitchValue }) => {
    try {
      return await GithubApi.getUsers(names);
    } catch (exception) {
      return rejectWitchValue(exception)
    }
  }
)

export const getRepos = createAsyncThunk(
  'players/getRepos',
  async (players, { rejectWitchValue }) => {
    try {
      const response = await githubApi.getPlayersRepos(players.map(player => player.login));
      return response.repos;
    } catch (exception) {
      return rejectWitchValue(exception)
    }
  }
)
