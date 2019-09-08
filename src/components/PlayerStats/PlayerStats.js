import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

import BattingChart from "../BattingChart/BattingChart";
import PitchingChart from "../PitchingChart/PitchingChart";
import FieldingChart from "../FieldingChart/FieldingChart";

class PlayerStats extends Component {
  render() {
    const player = this.props.playerStats[0];
    const teamName = this.props.teamName;

    return (
      <div>
        <Card className="playerContainer">
          <Typography className="playerName" gutterBottom variant="h5">
            {player.fullName}
          </Typography>
          <Typography className="playerPosition" gutterBottom variant="body1">
            {player.primaryPosition.name} for {teamName}
          </Typography>

          <div className="playerPicData">
            <img
              className="playerHeadshotStats"
              alt="Player Headshot"
              src={`https://securea.mlb.com/mlb/images/players/head_shot/${
                player.id
              }.jpg`}
            />

            <div className="playerBio">
              <Typography className="playerInfo" gutterBottom variant="body1">
                Age : {player.currentAge}
              </Typography>
              <Typography className="playerInfo" gutterBottom variant="body1">
                Height : {player.height}
              </Typography>
              <Typography className="playerInfo" gutterBottom variant="body1">
                Weight : {player.weight} lbs
              </Typography>
              <Typography className="playerInfo" gutterBottom variant="body1">
                Bats/Throws : {player.batSide.description} /{" "}
                {player.pitchHand.description}
              </Typography>

              <Typography className="playerInfo" gutterBottom variant="body1">
                From : {player.birthCity}, {player.birthCountry}
              </Typography>

              {player.draftYear ? (
                <Typography className="playerInfo" gutterBottom variant="body1">
                  Drafted : {player.draftYear}
                </Typography>
              ) : (
                <Typography className="playerInfo" gutterBottom variant="body1">
                  Drafted : Undrafted
                </Typography>
              )}
            </div>
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
              <p className="noStats">
                {" "}
                Please check back for {player.fullName}'s stats{" "}
              </p>
            )}
          </div>
        </Card>
      </div>
    );
  }
}

export default PlayerStats;
