export const SET_PLAYER1 = 'setPlayer1';
export const SET_PLAYER2 = 'setPlayer2';
export const SET_PLAYERS = 'setPlayers';
export const SET_REPOS = 'setRepos';
export const RESET_PLAYER1 = 'resetPlayer1';
export const RESET_PLAYER2 = 'resetPlayer2';
export const LOADING_PLAYER1 = 'loadingPlayer1';
export const LOADING_PLAYER2 = 'loadingPlayer2';
export const LOADING_PLAYERS = 'loadingPlayers';
export const LOADING_REPOS = 'loadingRepos';
export const ERROR_PLAYER1 = 'errorPlayer1';
export const ERROR_PLAYER2 = 'errorPlayer2';
export const ERROR_PLAYERS = 'errorPlayers';
export const ERROR_REPOS = 'errorRepos';

export const setPlayer1 = (payload) => ({
  type: SET_PLAYER1,
  payload
})

export const setPlayer2 = (payload) => ({
  type: SET_PLAYER2,
  payload
})

export const setPlayers = (payload) => ({
  type: SET_PLAYERS,
  payload
})

export const setRepos = (payload) => ({
  type: SET_REPOS,
  payload
})

export const resetPlayer1 = (payload) => ({
  type: RESET_PLAYER1,
  payload
})

export const resetPlayer2 = (payload) => ({
  type: RESET_PLAYER2,
  payload
})

export const isLoadingPlayer1 = (payload) => ({
  type: LOADING_PLAYER1,
  payload
})

export const isLoadingPlayer2 = (payload) => ({
  type: LOADING_PLAYER2,
  payload
})

export const isLoadingPlayers = (payload) => ({
  type: LOADING_PLAYERS,
  payload
})

export const isLoadingRepos = (payload) => ({
  type: LOADING_REPOS,
  payload
})

export const isErrorPlayer1 = (payload) => ({
  type: ERROR_PLAYER1,
  payload
})

export const isErrorPlayer2 = (payload) => ({
  type: ERROR_PLAYER2,
  payload
})

export const isErrorPlayers = (payload) => ({
  type: ERROR_PLAYERS,
  payload
})

export const isErrorRepos = (payload) => ({
  type: ERROR_REPOS,
  payload
})
