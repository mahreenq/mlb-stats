import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as selectedTeam from "../../redux/modules/selected-team";
import "./styles.css";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

// const useStyles = makeStyles({
//     card: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 140,
//     },
//   });

class Team extends Component {
  render() {
    const useStyles = makeStyles({
      card: {
        maxWidth: 345
      },
      media: {
        height: 140
      }
    });
    //console.log(this.props);
    const team = this.props.team;

    // const classes = useStyles();

    return (
      <Link
        className="singleTeam"
        to={{
          pathname: `/${team.id}`,
          state: {
            teamName: team.name
          }
        }}
      >
        {/* <div  onClick={() => this.props.getSelectedTeam(team.id)}> */}
        {/* <img
            alt="Team Logo"
            height="30"
            src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
          /> */}

        <Card
          style={{ margin: 8 }}
          onClick={() => this.props.getSelectedTeam(team.id)}
        >
          <CardActionArea>
            {/* <CardMedia
              component="img"
              height="140"
              image={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
              title="Team Logo"
              alt="Team Logo"
            /> */}

            {/* <Avatar
              alt="Team Logo"
              style={{ margin: 10, width: 80, height: 80 }}
              src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
            /> */}
            <img
              className="teamLogo"
              alt="Team Logo"
              src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
            />
            <CardContent>
              <Typography className ="teamName" gutterBottom variant="h5" component="h2">
                {team.name}
              </Typography>
              <Typography className ="teamName"  variant="body2" color="textSecondary" component="p">
                {team.division.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* </div> */}
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return { selectedTeamId: state.selectedTeamId };
};
export default connect(
  mapStateToProps,
  selectedTeam
)(Team);

// 36 & 39
//<Card className={classes.card}>
