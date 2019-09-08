import React, { Component } from "react";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import Roster from "./Roster";
import NotFound from "../../components/NotFound/NotFound";

class RosterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { roster: [], isLoading: false, error: false };
  }

  componentDidMount() {
    const teamId = this.props.match.params.teamId;
    this.setState({ isLoading: true });
    axios
      .get(`https://statsapi.mlb.com/api/v1/teams/${teamId}/roster`)

      .then(res => {
        const roster = res.data.roster;
        this.setState({ roster: roster, isLoading: false, error: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  render() {
    const teamId = this.props.match.params.teamId;
    const teamName = this.props.location.state
      ? this.props.location.state.teamName
      : undefined;
    // const teamName = this.props.location.state.teamName;

    const { isLoading, roster, error } = this.state;

    return error ? (
      <NotFound />
    ) : isLoading === false ? (
      <Roster
        roster={roster}
        teamId={teamId}
        teamName={teamName}
        isLoading={isLoading}
      />
    ) : (
      <Loading />
    );

    // return isLoading === false ? (
    // <Roster
    //   roster={roster}
    //   teamId={teamId}
    //   teamName={teamName}
    //   isLoading={isLoading}
    // />
    // ) : (
    //   <Loading />
    // );
  }
}

export default RosterContainer;
