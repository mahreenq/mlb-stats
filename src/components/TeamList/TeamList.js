import React, { Component } from "react";
import Team from "../Team/Team";
//import "./styles.css";
//import Project from "../Project";
//import * as selectedAction from "../../redux/modules/selected";
// import RaisedButton from "material-ui/RaisedButton";
// import { connect } from "react-redux";
// import projectData from "./project-data";

class TeamList extends Component {
  render() {
    //console.log(this.props);
    const { mlb_teams, selectedTeamId } = this.props;

    mlb_teams.sort((a, b) =>
      a.division.name > b.division.name
        ? 1
        : b.division.name > a.division.name
        ? -1
        : 0
    );

    return (
      <div>
        <p>MLB TEAMS</p>

        {mlb_teams.map(team => {
          return (
            <Team key={team.id} team={team} selectedTeamId={selectedTeamId} />
          );
        })}
      </div>
    );
  }
}

export default TeamList;
