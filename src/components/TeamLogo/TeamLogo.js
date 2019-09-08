import React, { Component } from "react";
import "./styles.css";

class TeamLogo extends Component {
  render() {
    const teamId = this.props.teamId;
    return (
      <img
        className="teamLogo"
        alt="Team Logo"
        src={`https://www.mlbstatic.com/team-logos/${teamId}.svg`}
      />
    );
  }
}

export default TeamLogo;
