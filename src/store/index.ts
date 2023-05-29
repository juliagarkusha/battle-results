import { createLogger } from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import popular from "./popular/popular.reducer";
import players from "./players/players.reducer";

const logger = createLogger({
  collapsed: true
});

const store = configureStore({
  reducer: {
    popular,
    players,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger),
});

export default store;
