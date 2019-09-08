import React, { Component } from "react";
import "./styles.css";

class PlayerHeadshot extends Component {
  render() {
    const {playerId, className} = this.props;
    return (
      <img
      className={className}
      alt="Player Headshot"
      src={`https://securea.mlb.com/mlb/images/players/head_shot/${
        playerId
      }.jpg`}
    />
    );
  }
}

export default PlayerHeadshot;
