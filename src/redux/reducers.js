import { combineReducers } from "redux";
import TeamsReducer from "../redux/modules/mlb-teams";
import SelectedTeamReducer from "../redux/modules/selected-team";

export default combineReducers({
  // projects: ProjectsReducer,
  teams: TeamsReducer,
  selectedTeamId: SelectedTeamReducer
});