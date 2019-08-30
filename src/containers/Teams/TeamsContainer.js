import React, { Component } from "react";
//import Loading from "../../components/Loading";
import axios from "axios";

class TeamsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [] };
  }

  componentDidMount() {
    axios
      .get("https://statsapi.mlb.com/api/v1/teams?sportId=1")
      .then(res => {
        const teams = res.data.teams;
        this.setState({ teams });
        console.log(this.state.teams);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const teams = this.state.teams;
    return (
      <div>

        {teams.map(team => {
          return (<p key={team.id}>{team.name}</p>)
        })}
      </div>
    );
  }
}

export default TeamsContainer;
