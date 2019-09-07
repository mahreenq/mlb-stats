import React, { Component } from "react";
import RosterSingle from "../RosterSingle/RosterSingle";
import Masonry from "react-masonry-component";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

class RosterList extends Component {
  render() {
    // console.log(this.props);
    const { roster, teamName, teamId } = this.props;

    return (
      <div>
        <Typography className="heading" variant="h5" gutterBottom>
          {teamName} Roster
        </Typography>
        <img
          className="teamLogo"
          alt="Team Logo"
          src={`https://www.mlbstatic.com/team-logos/${teamId}.svg`}
        />

        <Masonry className="rosterMasonry">
          {roster.map(player => {
            return (
              <RosterSingle
                player={player}
                teamId={teamId}
                key={player.person.id}
              />
            );
          })}
        </Masonry>
      </div>
    );
  }
}

export default RosterList;
