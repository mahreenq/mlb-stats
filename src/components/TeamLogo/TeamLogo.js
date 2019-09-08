import React, { Component } from "react";
import "./styles.css";

class TeamLogo extends Component {
  render() {
    const {teamId, className} = this.props;
    return (
      <img
        className={className}
        alt="Team Logo"
        src={`https://www.mlbstatic.com/team-logos/${teamId}.svg`}
      />
    );
  }
}

export default TeamLogo;
