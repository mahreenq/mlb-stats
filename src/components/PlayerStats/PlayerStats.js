import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

import BattingChart from "../BattingChart/BattingChart";
import PitchingChart from "../PitchingChart/PitchingChart";
import FieldingChart from "../FieldingChart/FieldingChart";

class PlayerStats extends Component {
  render() {
   // console.log(this.props.playerStats);
    const player = this.props.playerStats[0];

    return (
      <div>
        <Card style={{ margin: 35 }}>
          <Typography className="playerName" gutterBottom variant="h5">
            {player.fullName}
          </Typography>
          <Typography className="playerPosition" gutterBottom variant="body1">
            {player.primaryPosition.name}
          </Typography>

          <div className="playerCard">
            <img
              className="playerHeadshotStats"
              alt="Player Headshot"
              src={`https://securea.mlb.com/mlb/images/players/head_shot/${
                player.id
              }.jpg`}
            />

            <Typography className="playerInfo" gutterBottom variant="body1">
              Age : {player.currentAge}
            </Typography>

            <Typography className="playerInfo" gutterBottom variant="body1">
              Height : {player.height}
            </Typography>

            <Typography className="playerInfo" gutterBottom variant="body1">
              Weight : {player.weight} lbs
            </Typography>
          </div>

          <div>
            {this.props.playerStats[0].stats ? (
              this.props.playerStats[0].stats.map(stat => {
                return stat.group.displayName === "hitting" ? (
                  <BattingChart key={stat.group.displayName} stats={stat} />
                ) : stat.group.displayName === "fielding" ? (
                  <FieldingChart key={stat.group.displayName} stats={stat} />
                ) : stat.group.displayName === "pitching" ? (
                  <PitchingChart key={stat.group.displayName} stats={stat} />
                ) : null;
              })
            ) : (
              <p> Stats not available </p>
            )}
          </div>
        </Card>
      </div>
    );
  }
}

export default PlayerStats;
