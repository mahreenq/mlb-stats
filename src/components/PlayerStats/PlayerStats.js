import React, { Component } from "react";
//import "./styles.css";


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
