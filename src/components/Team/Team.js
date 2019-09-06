import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectedTeam from "../../redux/modules/selected-team";

class Team extends Component {
  render() {
    console.log(this.props);
    const team = this.props.team;
    return (
      <div onClick={() => this.props.getSelectedTeam(team.id)}>
        <img
          alt="Team Logo"
          height="30"
          src={`https://www.mlbstatic.com/team-logos/${team.id}.svg`}
        />
        {team.name} -- {team.division.name}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { selectedTeamId: state.selectedTeamId };
};
export default connect(
  mapStateToProps,
  selectedTeam
)(Team);
