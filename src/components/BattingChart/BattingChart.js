import "./styles.css";
import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class BattingChart extends Component {
  render() {
    const stats = this.props.stats.splits[0].stat;
    const season = this.props.stats.splits[0].season;

    const playerData = {
      "Games Played": `${stats.gamesPlayed}`,
      "Plate Appearances": `${stats.plateAppearances}`,
      "At Bats": `${stats.atBats}`,
      Runs: `${stats.runs}`,
      Hits: `${stats.hits}`,
      Doubles: `${stats.doubles}`,
      Triples: `${stats.triples}`,
      "Home Runs": `${stats.homeRuns}`,
      "Runs Batted In": `${stats.rbi}`,
      "Stolen Bases": `${stats.stolenBases}`,
      "Caught Stealing": `${stats.caughtStealing}`,
      Walks: `${stats.intentionalWalks}`,
      "Strike Outs": `${stats.strikeOuts}`,
      "Batting Avg": `${stats.avg}`,
      "On Base Percentage": `${stats.obp}`,
      "Slugging Percentage": `${stats.slg}`
    };

    const keys = Object.keys(playerData);
    // const values = Object.keys(playerData).map(function(value) {
    //   return playerData[value];
    // });

    return (
      <div className="rootTable">
        <Paper className="paperTable">
          <Table className="table" size="small">
            <TableHead>
              <TableRow>
                <TableCell className="blue">BATTING</TableCell>
                {keys.map(key => (
                  <TableCell key={key} align="center">
                    {key}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" className="blue">
                  {season}
                </TableCell>
                {Object.keys(playerData).map(function(value) {
                  return (
                    <TableCell key={value + "batting Stat"} align="center">
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

export default BattingChart;

//games played, plate appearances, at-bats, runs, hits
// doubles, triples, homeruns, runs batted in, stolen bases
//caught stealing, walks, strikeouts,
// batting avg, on base percentage, slugging percentage, on bas + slugging percentage
