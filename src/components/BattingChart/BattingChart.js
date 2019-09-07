//import Typography from "@material-ui/core/Typography";
import "./styles.css";

import React, { Component } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class BattingChart extends Component {
  render() {
    console.log("batting stats", this.props.stats.splits[0].stat);
    const stats = this.props.stats.splits[0].stat;
    //console.log(stats.gamesPlayed);

    return (
      <div className="rootTable">
        {/* <h1>BATTING TABLE </h1> */}
        <Paper className="paperTable">
          <Table className="table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>BATTING</TableCell>
                <TableCell align="center">Games Played</TableCell>
                <TableCell align="center">Plate Appearances</TableCell>
                <TableCell align="center">At Bats</TableCell>
                <TableCell align="center">Runs</TableCell>
                <TableCell align="center">Hits</TableCell>
                <TableCell align="center">Doubles</TableCell>
                <TableCell align="center">Triples</TableCell>
                <TableCell align="center">Home Runs</TableCell>
                <TableCell align="center">Runs Batted In</TableCell>
                <TableCell align="center">Stolen Bases</TableCell>
                <TableCell align="center">Caught Stealing</TableCell>
                <TableCell align="center">Walks</TableCell>
                <TableCell align="center">Strike Outs</TableCell>
                <TableCell align="center">Batting Avg</TableCell>
                <TableCell align="center">On Base Percentage</TableCell>
                <TableCell align="center">Slugging Percentage</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  2019
                </TableCell>
                <TableCell align="center">{stats.gamesPlayed}</TableCell>
                <TableCell align="center">{stats.plateAppearances}</TableCell>
                <TableCell align="center">{stats.atBats}</TableCell>
                <TableCell align="center">{stats.runs}</TableCell>
                <TableCell align="center">{stats.hits}</TableCell>
                <TableCell align="center">{stats.doubles}</TableCell>
                <TableCell align="center">{stats.triples}</TableCell>
                <TableCell align="center">{stats.homeRuns}</TableCell>
                <TableCell align="center">{stats.rbi}</TableCell>
                <TableCell align="center">{stats.stolenBases}</TableCell>
                <TableCell align="center">{stats.caughtStealing}</TableCell>
                <TableCell align="center">{stats.intentionalWalks}</TableCell>
                <TableCell align="center">{stats.strikeOuts}</TableCell>
                <TableCell align="center">{stats.avg}</TableCell>
                <TableCell align="center">{stats.obp}</TableCell>
                <TableCell align="center">{stats.slg}</TableCell>
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
