const GET_SELECTED_TEAM = "GET_SELECTED_TEAM";

export const getSelectedTeam = selectedTeamId => {
  return {
    type: GET_SELECTED_TEAM,
    payload: selectedTeamId
  };
};

export default (state = "", action) => {
  switch (action.type) {
    case GET_SELECTED_TEAM:
      return action.payload;

    default:
      return state;
  }
};