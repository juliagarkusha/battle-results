import { combineReducers } from "redux";
import popular from "./popular";
import players from "./players";

const rootReducer = combineReducers({
  popular,
  players
})

export default rootReducer;
