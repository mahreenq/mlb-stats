import React from "react";
import RosterList from "../../components/RosterList/RosterList";
import Loading from "../../components/Loading/Loading";

const Roster = ({ roster, isLoading, teamId, teamName }) => {
  return roster.length > 0 ? (
    <RosterList
      roster={roster}
      isLoading={isLoading}
      teamId={teamId}
      teamName={teamName}
    />
  ) : (
    <Loading />
  );
};

export default Roster;
