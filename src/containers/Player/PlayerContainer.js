import React, { Component } from "react";
import Loading from "../../components/Loading/Loading.js";
import axios from "axios";
import NotFound from "../../components/NotFound/NotFound";
import Player from "./Player";

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { playerStats: [], isLoading: false, error: false };
  }

  componentDidMount() {
    const playerId = this.props.match.params.playerId;
    this.setState({ isLoading: true });
    axios
      .get(
        `https://statsapi.mlb.com//api/v1/people/${playerId}?hydrate=stats(group=[hitting,pitching,fielding],type=[season])`
      )

      .then(res => {
        const playerStats = res.data.people;
        this.setState({
          playerStats: playerStats,
          isLoading: false,
          error: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  render() {
    const { isLoading, playerStats, error } = this.state;
    const teamName = this.props.location.state
      ? this.props.location.state.teamName
      : undefined;

    const teamId = this.props.location.state
      ? this.props.location.state.teamId
      : undefined;

    return error && playerStats.length === 0 ? (
      <NotFound />
    ) : isLoading === false ? (
      <Player
        playerStats={playerStats}
        isLoading={isLoading}
        teamName={teamName}
        teamId={teamId}
      />
    ) : (
      <Loading />
    );
  }
}

export default PlayerContainer;
