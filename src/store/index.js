import { createLogger } from "redux-logger/src";
import { configureStore } from "@reduxjs/toolkit";
import popular from "./popular/popular.reducer";
import players from "./players/players.reducer";

const logger = createLogger({
  collapsed: true
})

const store = configureStore({
  reducer: {
    popular,
    players,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      logger
    )
  }
});

export default store;
