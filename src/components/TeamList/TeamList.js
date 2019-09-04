import React, { Component } from "react";
import Team from '../Team/Team';
//import "./styles.css";
//import Project from "../Project";
//import * as selectedAction from "../../redux/modules/selected";
// import RaisedButton from "material-ui/RaisedButton";
// import { connect } from "react-redux";
// import projectData from "./project-data";

class TeamList extends Component {
  render() {
    const mlb_teams = this.props.mlb_teams;
    // mlb_teams.map(team => {
    //   console.log(team.name);
    // });

    return (
      <div>
        <p>MLB TEAMS</p>
        {mlb_teams.map(team => {
           return <Team key={team.id} team={team}/>
        })}
      </div>
    );
  }
}

export default TeamList;
