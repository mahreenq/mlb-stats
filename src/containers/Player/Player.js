import React from "react";
import PlayerStats from '../../components/PlayerStats/PlayerStats';

//import Loading from "../../components/Loading";
// import styles from './styles.css';

const Player = ({ isLoading, playerStats }) => {
  return playerStats.length > 0 ? (
    <PlayerStats playerStats={playerStats} isLoading={isLoading}  />
  ) : (
    <p> LOADING </p>
  );
};

export default Player;