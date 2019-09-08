import React, { Component } from "react";
import Team from "../Team/Team";
import "./styles.css";
import Masonry from "react-masonry-component";
import Typography from "@material-ui/core/Typography";

class TeamList extends Component {
  render() {
    const { mlb_teams, selectedTeamId } = this.props;

    mlb_teams.sort((a, b) =>
      a.division.name > b.division.name
        ? 1
        : b.division.name > a.division.name
        ? -1
        : 0
    );

    return (
      <div>
        <Typography className="heading" variant="h5" gutterBottom>
          Teams
        </Typography>
        <Masonry className="masonry">
          {mlb_teams.map(team => {
            return (
              <Team key={team.id} team={team} selectedTeamId={selectedTeamId} />
            );
          })}
        </Masonry>
      </div>
    );
  }
}

export default TeamList;
