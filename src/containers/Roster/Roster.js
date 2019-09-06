import React from "react";
import RosterList from '../../components/RosterList/RosterList';

//import Loading from "../../components/Loading";
// import styles from './styles.css';

const Roster = ({ roster, isLoading, teamId, teamName }) => {
  return roster.length > 0 ? (
    <RosterList roster={roster} isLoading={isLoading} teamId={teamId} teamName={teamName} />
  ) : (
    <p> LOADING </p>
  );
};

export default Roster;