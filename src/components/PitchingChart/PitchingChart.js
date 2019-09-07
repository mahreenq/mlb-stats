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
    console.log("pitching stats", this.props.stats.splits[0].stat);
    const stats = this.props.stats.splits[0].stat;

    return (
      <div className="rootTable">
        {/* <h1>PITCHING TABLE </h1> */}
        <Paper className="paperTable">
          <Table className="table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>PITCHING</TableCell>
                <TableCell align="center">Games Pitched</TableCell>
                <TableCell align="center">Games Started</TableCell>
                <TableCell align="center">Wins</TableCell>
                <TableCell align="center">Losses</TableCell>
                <TableCell align="center">Win/Loss Percentage</TableCell>
                <TableCell align="center">Complete Games</TableCell>
                <TableCell align="center">Shutouts</TableCell>
                <TableCell align="center">Saves</TableCell>
                <TableCell align="center">Holds</TableCell>
                <TableCell align="center">Innings Pitched</TableCell>
                <TableCell align="center">Hits</TableCell>
                <TableCell align="center">Runs</TableCell>
                <TableCell align="center">Earned Runs</TableCell>
                <TableCell align="center">Home Runs</TableCell>
                <TableCell align="center">BB (Walks)</TableCell>
                <TableCell align="center">Strikeouts</TableCell>
                <TableCell align="center">ERA</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  2019
                </TableCell>
                <TableCell align="center">{stats.gamesPitched}</TableCell>
                <TableCell align="center">{stats.gamesStarted}</TableCell>
                <TableCell align="center">{stats.wins}</TableCell>
                <TableCell align="center">{stats.losses}</TableCell>
                <TableCell align="center">{stats.winPercentage}</TableCell>
                <TableCell align="center">{stats.completeGames}</TableCell>
                <TableCell align="center">{stats.shutouts}</TableCell>
                <TableCell align="center">{stats.saves}</TableCell>
                <TableCell align="center">{stats.holds}</TableCell>
                <TableCell align="center">{stats.inningsPitched}</TableCell>
                <TableCell align="center">{stats.hits}</TableCell>
                <TableCell align="center">{stats.runs}</TableCell>
                <TableCell align="center">{stats.earnedRuns}</TableCell>
                <TableCell align="center">{stats.homeRuns}</TableCell>
                <TableCell align="center">{stats.baseOnBalls}</TableCell>
                <TableCell align="center">{stats.strikeOuts}</TableCell>
                <TableCell align="center">{stats.era}</TableCell>
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
