import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TeamLogo from "../TeamLogo/TeamLogo";
//BELOW TO USE WITH REDUX
// import { connect } from "react-redux";
// import * as selectedTeam from "../../redux/modules/selected-team";

class Team extends Component {
  render() {
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
        <Card
          style={{ margin: 8 }}
          //BELOW TO USE WITH REDUX
          // onClick={() => this.props.getSelectedTeam(team.id)}
        >
          <CardActionArea>
            <TeamLogo teamId={team.id} className="teamLogo" />

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
      </Link>
    );
  }
}

export default Team;

// const mapStateToProps = state => {
//   return { selectedTeamId: state.selectedTeamId };
// };
// export default connect(
//   mapStateToProps,
//   selectedTeam
// )(Team);
