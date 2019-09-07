import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./styles.css";

class RosterSingle extends Component {
  render() {
    //console.log(this.props);
    const player = this.props.player.person;
    const teamId = this.props.teamId;
    const position = this.props.player.position.name;
    return (
      <Link
        className="singlePlayer"
        to={{
          pathname: `/${teamId}/${player.id}`,
          state: {
            playerName: player.fullName,
            playerId: player.id
          }
        }}
      >
        <Card style={{ margin: 8 }}>
          <CardActionArea>
            <img
              className="playerHeadshot"
              alt="Player Headshot"
              src={`https://securea.mlb.com/mlb/images/players/head_shot/${
                player.id
              }.jpg`}
            />
            <CardContent>
              <Typography
                className="teamName"
                gutterBottom
                variant="body1"
                component="h2"
              >
                {player.fullName}
              </Typography>
              <Typography
                className="teamName"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {position}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
}

export default RosterSingle;
