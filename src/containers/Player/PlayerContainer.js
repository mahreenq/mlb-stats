import React, { Component } from "react";
//import Loading from "../../components/Loading";
import axios from "axios";

import { connect } from "react-redux";
import { fetchTeams } from "../../redux/modules/mlb-teams";

import Player from "./Player";

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { playerStats: [], isLoading: false };
  }

  componentDidMount() {
    const playerId = this.props.match.params.playerId;
    this.setState({ isLoading: true });
    axios
      .get(
        `https://statsapi.mlb.com//api/v1/people/${playerId}?hydrate=stats(group=[hitting,pitching,fielding],type=[yearByYear])`
      )

      .then(res => {
        const playerStats = res.data.people;
        this.setState({ playerStats: playerStats, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // const teamId = this.props.match.params.teamId;
    // const teamName = this.props.location.state.teamName;
    const { isLoading, playerStats } = this.state;

    // console.log(this.props);
    // console.log(this.state);
    //return <p>PLAYER STATSSS</p>;

     return isLoading === false ? <Player playerStats={playerStats} isLoading={isLoading} /> : <p>LOADING </p>;
  }
}

export default PlayerContainer;