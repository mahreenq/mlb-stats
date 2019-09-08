import React, { Component } from "react";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
// BELOW ARE IMPORTED TO USE WITH REDUX
// import { connect } from "react-redux";
// import { fetchTeams } from "../../redux/modules/mlb-teams";

import Teams from "./Teams";

class TeamsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { roster: [], isLoading: false };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(`https://statsapi.mlb.com/api/v1/teams?sportId=1`)

      .then(res => {
        const teams = res.data.teams;
        this.setState({ teams: teams, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const isLoading = this.state.isLoading;
    const mlb_teams = this.state.teams;

    return isLoading === false ? (
      <Teams mlb_teams={mlb_teams} isLoading={isLoading} />
    ) : (
      <Loading />
    );
  }
}

export default TeamsContainer;



//BELOW WORKS WITH REDUX THUNK
// class TeamsContainer extends Component {
//   UNSAFE_componentWillMount() {
//     this.props.dispatch(fetchTeams());
//   }

//   render() {
//     const isLoading = this.props.isLoading;
//     const mlb_teams = this.props.teams.teams;

//     return isLoading === false ? (
//       <Teams mlb_teams={mlb_teams} isLoading={isLoading} />
//     ) : (
//       <Loading />
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoading: state.teams.isLoading,
//   teams: state.teams.teamsData,
//   selectedTeamId: state.selectedTeamId
// });

// export default connect(mapStateToProps)(TeamsContainer);
