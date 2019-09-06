import React, { Component } from "react";
//import Loading from "../../components/Loading";
import axios from "axios";

import { connect } from "react-redux";
import { fetchTeams } from "../../redux/modules/mlb-teams";

import Roster from "./Roster";

class RosterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { roster: [], isLoading: false };
  }

  componentDidMount() {
    const teamId = this.props.match.params.teamId;
    this.setState({ isLoading: true });
    axios
      .get(`https://statsapi.mlb.com//api/v1/teams/${teamId}/roster`)

      .then(res => {
        const roster = res.data.roster;
        this.setState({ roster: roster, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const teamId = this.props.match.params.teamId;
    const teamName = this.props.location.state.teamName;
    const { isLoading, roster } = this.state;
    

    console.log(this.props, teamId);

    return isLoading === false ? <Roster roster={roster} teamId={teamId} teamName={teamName} isLoading={isLoading}/> : <p>LOADING </p>;
  }
}

export default RosterContainer;
