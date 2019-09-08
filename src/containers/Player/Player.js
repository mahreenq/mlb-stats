import React from "react";
import PlayerStats from "../../components/PlayerStats/PlayerStats";
import Loading from "../../components/Loading/Loading";

const Player = ({ isLoading, playerStats, teamName, teamId }) => {
  return playerStats.length > 0 ? (
    <PlayerStats
      playerStats={playerStats}
      isLoading={isLoading}
      teamName={teamName}
      teamId={teamId}
    />
  ) : (
    <Loading />
  );
};

export default Player;
