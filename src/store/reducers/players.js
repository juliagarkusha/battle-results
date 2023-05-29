import {
  SET_PLAYER1,
  SET_PLAYER2,
  SET_PLAYERS,
  SET_REPOS,
  RESET_PLAYER1,
  RESET_PLAYER2,
  LOADING_PLAYER1,
  LOADING_PLAYER2,
  LOADING_PLAYERS,
  LOADING_REPOS,
  ERROR_PLAYER1,
  ERROR_PLAYER2,
  ERROR_PLAYERS,
  ERROR_REPOS,
} from "../actions/players";

const initialState = {
  player1: null,
  player2: null,
  players: [],
  repos: [],
  winnerIndex: 1,
  loadingPlayer1: false,
  loadingPlayer2: false,
  loadingPlayers: false,
  loadingRepos: false,
  errorPlayer1: null,
  errorPlayer2: null,
  errorPlayers: null,
  errorRepos: null,
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER1:
      return {
        ...state,
        loadingPlayer1: false,
        errorPlayer1: null,
        player1: action.payload
      }
    case RESET_PLAYER1:
      return {
        ...state,
        player1: null
      }
    case LOADING_PLAYER1:
      return {
        ...state,
        loadingPlayer1: true,
        errorPlayer1: null,
      }
    case ERROR_PLAYER1:
      return {
        ...state,
        loadingPlayer1: false,
        errorPlayer1: action.payload
      }
    case SET_PLAYER2:
      return {
        ...state,
        loadingPlayer2: false,
        errorPlayer2: null,
        player2: action.payload
      }
    case RESET_PLAYER2:
      return {
        ...state,
        player2: null
      }
    case LOADING_PLAYER2:
      return {
        ...state,
        loadingPlayer2: true,
        errorPlayer2: null,
      }
    case ERROR_PLAYER2:
      return {
        ...state,
        loadingPlayer2: false,
        errorPlayer2: action.payload
      }
    case SET_PLAYERS:
      return {
        ...state,
        loadingPlayers: false,
        errorPlayers: null,
        players: action.payload
      }
    case LOADING_PLAYERS:
      return {
        ...state,
        loadingPlayers: true,
        errorPlayers: null,
      }
    case ERROR_PLAYERS:
      return {
        ...state,
        loadingPlayers: false,
        errorPlayers: action.payload
      }
    case SET_REPOS:
      return {
        ...state,
        loadingRepos: false,
        errorRepos: null,
        repos: action.payload
      }
    case LOADING_REPOS:
      return {
        ...state,
        loadingRepos: true,
        errorRepos: null,
      }
    case ERROR_REPOS:
      return {
        ...state,
        loadingRepos: false,
        errorRepos: action.payload
      }
    default:
      return state
  }
}

export default players;
