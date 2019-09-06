import React, { Component } from "react";
import Team from "../Team/Team";
import RosterSingle from "../RosterSingle/RosterSingle";
//import "./styles.css";
//import Project from "../Project";
//import * as selectedAction from "../../redux/modules/selected";
// import RaisedButton from "material-ui/RaisedButton";
// import { connect } from "react-redux";
// import projectData from "./project-data";

class PlayerStats extends Component {
  render() {
   // console.log(this.props.playerStats[0]);
    const player =this.props.playerStats[0];

    return (
      <div>
        <h1>{player.fullName}</h1>
        <img
            alt="Player Headshot"
            height="200"
            src={`https://securea.mlb.com/mlb/images/players/head_shot/${
              player.id
            }.jpg`}
          />

      </div>
    );
  }
}

export default PlayerStats;
