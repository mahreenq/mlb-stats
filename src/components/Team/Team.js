import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as selectedTeam from "../../redux/modules/selected-team";
import "./styles.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Team extends Component {
  render() {
    //console.log(this.props);
    const team = this.props.team;

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
            <img
              className="teamLogo"
              alt="Team Logo"
              src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
            />
            <CardContent>
              <Typography
                className="teamName"
                gutterBottom
                variant="body1"
                component="h2"
              >
                {team.name}
              </Typography>
              <Typography
                className="teamName"
                variant="body2"
                color="textSecondary"
                component="p"
              >
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

