import React, { Component } from "react";
import RosterSingle from "../RosterSingle/RosterSingle";
import Masonry from "react-masonry-component";
import Typography from "@material-ui/core/Typography";
import TeamLogo from "../TeamLogo/TeamLogo";
import "./styles.css";

class RosterList extends Component {
  render() {
    const { roster, teamName, teamId } = this.props;

    return (
      <div>
        <Typography className="heading" variant="h5" gutterBottom>
          {teamName} Roster
        </Typography>

        <TeamLogo className="teamLogo" teamId={teamId} />

        <Masonry className="rosterMasonry">
          {roster.map(player => {
            return (
              <RosterSingle
                teamName={teamName}
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
