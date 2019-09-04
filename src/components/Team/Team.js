import React, { Component } from "react";

const Team = ({ team }) => {
  return (
    <div>
      <img
        height="30"
        src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
      />
      {team.name}
    </div>
  );
};

export default Team;
