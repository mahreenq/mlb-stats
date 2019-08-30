// import mlbTeams Data
const teamsURL = "https://statsapi.mlb.com/api/v1/teams?sportId=1";

//types of actions to modify our state

const GET_TEAMS_LOADING = "GET_TEAMS_LOADING";
const GET_TEAMS_ERROR = "GET_TEAMS_ERROR";
const GET_TEAMS = "GET_TEAMS";

//Dispatch actions, optionally with payloads

const getTeamsLoading = () => {
  return {
    type: GET_TEAMS_LOADING
  };
};

const getTeamsError = error => {
  return {
    type: GET_TEAMS_ERROR,
    payload: error
  };
};

const getTeams = teamsData => {
  return {
    type: GET_TEAMS,
    payload: teamsData
  };
};

//HELPER FN

export const fetchTeams = () => dispatch => {
  dispatch(getTeamsLoading());

  return fetch(`${teamsURL}`)
    .then(response => response.json())
    .then(teamsData => dispatch(getTeams(teamsData)))
    .catch(error => dispatch(getTeamsError(error)));
};

//Reducer that handles our actions and manipulates our state in the store

export default function reducer(
  state = { isLoading: false, teamsData: [] },
  action
) {
  switch (action.type) {
    case GET_TEAMS_LOADING: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_TEAMS_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case GET_TEAMS: {
      return {
        ...state,
        isLoading: false,
        error: "",
        teamsData: action.payload
      };
    }
    default: {
      return state;
    }
  }
}