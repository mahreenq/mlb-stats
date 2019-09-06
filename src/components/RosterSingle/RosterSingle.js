import React, { Component } from "react";
import { Link } from "react-router-dom";


import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



import "./styles.css";

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
            playerId: player.id
          }
        }}
      >
        <Card
          style={{ margin: 8 }}
        >
          <CardActionArea>
            <img
              className="teamLogo"
              alt="Team Logo"
              src={`https://securea.mlb.com/mlb/images/players/head_shot/${
                player.id
              }.jpg`}
            />
            <CardContent>
              {/* <Typography
                className="teamName"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {team.name}
              </Typography> */}
              <Typography
                className="teamName"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {player.fullName}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* <div>
          <img
            alt="Player Headshot"
            height="100"
            src={`https://securea.mlb.com/mlb/images/players/head_shot/${
              player.id
            }.jpg`}
          />
          <p>{player.fullName}</p>
        </div> */}
      </Link>
    );
  }
}

export default RosterSingle;
