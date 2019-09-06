import React, { Component } from "react";
import RosterSingle from "../RosterSingle/RosterSingle";
import Masonry from "react-masonry-component";
//import "./styles.css";

class RosterList extends Component {
  render() {
    // console.log(this.props);
    const { roster, teamName, teamId } = this.props;

    return (
      <div>
        <h1>{teamName}</h1>
        <Masonry className="">
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
