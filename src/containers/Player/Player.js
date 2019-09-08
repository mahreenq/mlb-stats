import React from "react";
import PlayerStats from "../../components/PlayerStats/PlayerStats";
import Loading from "../../components/Loading/Loading";

const Player = ({ isLoading, playerStats }) => {
  return playerStats.length > 0 ? (
    <PlayerStats playerStats={playerStats} isLoading={isLoading} />
  ) : (
    <Loading />
  );
};

export default Player;
