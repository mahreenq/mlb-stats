import React, { Component } from "react";
//import Loading from "../../components/Loading";
//import axios from "axios";

import { connect } from "react-redux";
import { fetchTeams } from "../../redux/modules/mlb-teams";
//import {getSelectedTeam} from "../../redux/modules/selected-team";

import Teams from "./Teams";

class TeamsContainer extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(fetchTeams());
  }

  render() {
    const isLoading = this.props.isLoading;
    const mlb_teams = this.props.teams.teams;
//   const { isLoading, mlb_teams } = this.props;


    return isLoading === false ? (
      <Teams
        mlb_teams={mlb_teams}
        isLoading={isLoading}
      />
    ) : (
      <p>LOADING </p>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.teams.isLoading,
  teams: state.teams.teamsData,
  selectedTeamId: state.selectedTeamId
});

export default connect(mapStateToProps)(TeamsContainer);

//export default TeamsContainer;

//   constructor(props) {
//     super(props);
//     this.state = { teams: [] };
//   }

//   componentDidMount() {
//     axios
//       .get("https://statsapi.mlb.com/api/v1/teams?sportId=1")
//       .then(res => {
//         const teams = res.data.teams;
//         this.setState({ teams });
//         console.log(this.state.teams);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     const teams = this.state.teams;
//     return (
//       <div>
//         {teams.map(team => {
//           return (
//             <div key={team.id}>
//               <img
//                 src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
//                 height="30"
//               />
//               <p key={team.id}>
//                 {team.name} -- {team.id}
//               </p>
//               <br />
//               <br />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
