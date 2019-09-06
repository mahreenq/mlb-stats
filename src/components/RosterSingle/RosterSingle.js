import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as selectedTeam from "../../redux/modules/selected-team";

class RosterSingle extends Component {
  render() {
    console.log(this.props);
    const player = this.props.player.person;
    const teamId = this.props.teamId;
    return (
      <Link
      to={{
        pathname: `/${teamId}/${player.id}`, 
        state: {
          playerName: player.fullName,
          playerId : player.id
        }
      }}
      >
        {/* <div onClick={() => this.props.getSelectedTeam(team.id)}>
          <img
            alt="Team Logo"
            height="30"
            src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
          />
          {team.name} -- {team.division.name}
        </div> */}
        <div>
          <img
            alt="Player Headshot"
            height="100"
            src={`https://securea.mlb.com/mlb/images/players/head_shot/${
              player.id
            }.jpg`}
          />
          <p>{player.fullName}</p>
        </div>
      </Link>
    );
  }
}

export default RosterSingle;

//{`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
