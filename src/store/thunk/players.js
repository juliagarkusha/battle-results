import GithubApi from "../../api/GithubApi";
import {
  setPlayer1,
  setPlayer2,
  isLoadingPlayer1,
  isLoadingPlayer2,
  isErrorPlayer1,
  isErrorPlayer2,
  setPlayers,
  isLoadingPlayers,
  isErrorPlayers,
  setRepos,
  isLoadingRepos,
  isErrorRepos
} from "../actions/players";

import githubApi from "../../api/GithubApi";

export const getPlayer1 = (name) => (dispatch) => {
  try {
    dispatch(isLoadingPlayer1());
    GithubApi.getUser(name).then(player => dispatch(setPlayer1(player)));
  } catch (exception) {
    dispatch(isErrorPlayer1())
  }
}

export const getPlayer2 = (name) => (dispatch) => {
  try {
    dispatch(isLoadingPlayer2())
    GithubApi.getUser(name).then(player => dispatch(setPlayer2(player)));
  } catch (exception) {
    dispatch(isErrorPlayer2())
  }
}

export const getPlayers = (names) => (dispatch) => {
  try {
    dispatch(isLoadingPlayers());
    githubApi.getUsers(names).then(data => dispatch(setPlayers(data.users)));
  } catch (exception) {
    dispatch(isErrorPlayers())
  }
}

export const getRepos = (players) => (dispatch) => {
  try {
    dispatch(isLoadingRepos());
    githubApi.getPlayersRepos(players.map(player => player.login))
      .then(data => {
        dispatch(setRepos(data.repos))
      });
  } catch (exception) {
    dispatch(isErrorRepos())
  }
}

