import "./styles.css";
import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class PitchingChart extends Component {
  render() {
    const stats = this.props.stats.splits[0].stat;

    const playerData = {
      "Games Pitched ": `${stats.gamesPitched}`,
      "Games Started ": `${stats.gamesStarted}`,
      "Wins ": `${stats.wins}`,
      "Losses ": `${stats.losses}`,
      "Win/Loss Percentage ": `${stats.winPercentage}`,
      "Complete Games ": `${stats.completeGames}`,
      "Shutouts ": `${stats.shutouts}`,
      "Saves ": `${stats.saves}`,
      "Holds ": `${stats.holds}`,
      "Innings Pitched ": `${stats.inningsPitched}`,
      "Hits ": `${stats.hits}`,
      "Runs ": `${stats.runs}`,
      "Earned Runs ": `${stats.earnedRuns}`,
      "Home Runs ": `${stats.homeRuns}`,
      "BB (Walks) ": `${stats.baseOnBalls}`,
      "Strikeouts ": `${stats.strikeOuts}`,
      "ERA ": `${stats.era}`
    };

    const keys = Object.keys(playerData);

    return (
      <div className="rootTable">
        <Paper className="paperTable">
          <Table className="table" size="small">
            <TableHead>
              <TableRow>
                <TableCell className="blue">PITCHING</TableCell>
                {keys.map(key => (
                  <TableCell key={key} align="center">
                    {key}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" />
                {Object.keys(playerData).map(function(value) {
                  return (
                    <TableCell key={value + "pitching Stat"} align="center">
                      {playerData[value]}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default PitchingChart;
// games pitched, games started, wins, losses, win/loss percentage
// complete games, shutouts, saves, holds, innings pitched
// hits, runs, earned runs, home runs allowed, base on balls (walks), strikeouts,
// ERA
