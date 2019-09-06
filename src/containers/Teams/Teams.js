import React from "react";

//import Loading from "../../components/Loading";
// import styles from './styles.css';
import TeamList from "../../components/TeamList/TeamList";

const Teams = ({ mlb_teams, isLoading, selectedTeamId}) => {
    

  return mlb_teams.teams ? (
    <TeamList mlb_teams={mlb_teams.teams} isLoading={isLoading} selectedTeamId={selectedTeamId}  />
  ) : (
    <p> LOADING</p>
  );
};

export default Teams;

