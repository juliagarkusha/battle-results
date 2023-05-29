import { createSlice } from "@reduxjs/toolkit";
import { getPlayer1, getPlayer2, getPlayers, getRepos } from "./players.requests";

export const playersSlice = createSlice({
  name: "players",
  initialState: {
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
  },
  reducers: {
    setPlayer1: (state, action) => {
      state.loadingPlayer1 = false;
      state.errorPlayer1 = null;
      state.player1 = action.payload;
    },
    setPlayer2: (state, action) => {
      state.loadingPlayer2 = false;
      state.errorPlayer2 = null;
      state.player2 = action.payload;
    },
    // setPlayers: (state, action) => {
    //   state.loadingPlayers = false;
    //   state.errorPlayers = null;
    //   state.players = action.payload;
    // },
    setRepos: (state, action) => {
      state.loadingRepos = false;
      state.errorRepos = null;
      state.repos = action.payload;
    },
    resetPlayer1: (state) => {
      state.player1 = null
    },
    resetPlayer2: (state) => {
      state.player2 = null
    },
    isLoadingPlayer1: (state) => {
      state.loadingPlayer1 = true;
      state.errorPlayer1 = null;
    },
    isLoadingPlayer2: (state) => {
      state.loadingPlayer2 = true;
      state.errorPlayer2 = null;
    },
    isLoadingPlayers: (state) => {
      state.loadingPlayers = true;
      state.errorPlayers = null;
    },
    isLoadingRepos: (state) => {
      state.loadingRepos = true;
      state.errorRepos = null;
    },
    isErrorPlayer1: (state, action) => {
      state.loadingPlayer1 = false;
      state.errorPlayer1 = action.payload;
    },
    isErrorPlayer2: (state, action) => {
      state.loadingPlayer2 = false;
      state.errorPlayer2 = action.payload;
    },
    isErrorPlayers: (state, action) => {
      state.loadingPlayers = false;
      state.errorPlayers = action.payload;
    },
    isErrorRepos: (state, action) => {
      state.loadingRepos = false;
      state.errorRepos = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPlayer1.pending, (state) => {
      state.loadingPlayer1 = true;
      state.errorPlayer1 = null;
    })
    builder.addCase(getPlayer1.fulfilled, (state, action) => {
      state.loadingPlayer1 = false;
      state.player1 = action.payload;
    })
    builder.addCase(getPlayer1.rejected, (state, action) => {
      state.loadingPlayer1 = false;
      state.errorPlayer1 = action.payload;
    })
    builder.addCase(getPlayer2.pending, (state) => {
      state.loadingPlayer2 = true;
      state.errorPlayer2 = null;
    })
    builder.addCase(getPlayer2.fulfilled, (state, action) => {
      state.loadingPlayer2 = false;
      state.player2 = action.payload;
    })
    builder.addCase(getPlayer2.rejected, (state, action) => {
      state.loadingPlayer2 = false;
      state.errorPlayer2 = action.payload;
    })
    builder.addCase(getPlayers.pending, (state) => {
      state.loadingPlayers = true;
      state.errorPlayers = null;
    })
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.loadingPlayers = false;
      state.players = action.payload.users;
    })
    builder.addCase(getPlayers.rejected, (state, action) => {
      state.loadingPlayers = false;
      state.errorPlayers = action.payload;
    })
    builder.addCase(getRepos.pending, (state) => {
      state.loadingRepos = true;
      state.errorRepos = null;
    })
    builder.addCase(getRepos.fulfilled, (state, action) => {
      state.loadingRepos = false;
      state.repos = action.payload;
    })
    builder.addCase(getRepos.rejected, (state, action) => {
      state.loadingRepos = false;
      state.errorRepos = action.payload;
    })
  }
})

export const {
  setPlayer1,
  setPlayer2,
  setPlayers,
  setRepos,
  resetPlayer1,
  resetPlayer2,
  isLoadingPlayer1,
  isLoadingPlayer2,
  isLoadingPlayers,
  isLoadingRepos,
  isErrorPlayer1,
  isErrorPlayer2,
  isErrorPlayers,
  isErrorRepos,
} = playersSlice.actions

export default playersSlice.reducer;
