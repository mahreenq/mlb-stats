import React from "react";
import Loading from "../../components/Loading/Loading";
import TeamList from "../../components/TeamList/TeamList";

const Teams = ({ mlb_teams, isLoading, selectedTeamId }) => {
  return mlb_teams ? (
    <TeamList
      mlb_teams={mlb_teams}
      isLoading={isLoading}
      selectedTeamId={selectedTeamId}
    />
  ) : (
    <Loading />
  );
};

export default Teams;
