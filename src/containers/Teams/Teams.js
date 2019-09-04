import React from "react";

//import Loading from "../../components/Loading";
// import styles from './styles.css';
import TeamList from "../../components/TeamList/TeamList";

const Teams = ({ mlb_teams, isLoading }) => {
    console.log (mlb_teams.teams);
    
    
    // mlb_teams.teams.map(team =>{
    //     console.log(team.name);
    // })


  return mlb_teams.teams ? (
    <TeamList mlb_teams={mlb_teams.teams} isLoading={isLoading} />
  ) : (
    <p> LOADING</p>
  );
};

export default Teams;

// return teams.length > 0 ? (
//     <ProjectList projectsData={projectsData} isLoading={isLoading} />
//   ) : (
//     <Loading />
//   );