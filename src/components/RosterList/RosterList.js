import React, { Component } from "react";
import Team from "../Team/Team";
import RosterSingle from "../RosterSingle/RosterSingle";
//import "./styles.css";
//import Project from "../Project";
//import * as selectedAction from "../../redux/modules/selected";
// import RaisedButton from "material-ui/RaisedButton";
// import { connect } from "react-redux";
// import projectData from "./project-data";

class RosterList extends Component {
  render() {
   // console.log(this.props);
    const { roster, teamName, teamId } = this.props;

    return (
      <div>
        <h1>{teamName}</h1>

        {roster.map(player => {
          return <RosterSingle player={player} teamId={teamId} key ={player.person.id}/>;
        })}
      </div>
    );
  }
}

export default RosterList;
