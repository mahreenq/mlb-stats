import React, { Component } from "react";
import { Link } from "react-router-dom";

class RosterSingle extends Component {
  render() {
   // console.log(this.props);
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

