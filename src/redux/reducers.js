import { combineReducers } from "redux";
import TeamsReducer from "../redux/modules/mlb-teams";

export default combineReducers({
  // projects: ProjectsReducer,
  teams: TeamsReducer
});