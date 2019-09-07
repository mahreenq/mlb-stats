import "./styles.css";
import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class FieldingChart extends Component {
  render() {
    console.log("fielding stats", this.props.stats.splits[0].stat);
    const stats = this.props.stats.splits[0].stat;

    return (
      <div className="rootTable">
        {/* <h1>FIELDING TABLE </h1> */}
        <Paper className="paperTable">
          <Table className="table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>FIELDING</TableCell>

                <TableCell align="center">Games</TableCell>
                <TableCell align="center">Games Started</TableCell>
                <TableCell align="center">Innings</TableCell>
                <TableCell align="center">Opportunities</TableCell>
                <TableCell align="center">Putouts</TableCell>
                <TableCell align="center">Assists</TableCell>
                <TableCell align="center">Errors</TableCell>
                <TableCell align="center">Double Plays</TableCell>
                <TableCell align="center">Fielding Percentage</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  2019
                </TableCell>
                <TableCell align="center">{stats.games}</TableCell>
                <TableCell align="center">{stats.gamesStarted}</TableCell>
                <TableCell align="center">{stats.innings}</TableCell>
                <TableCell align="center">{stats.chances}</TableCell>
                <TableCell align="center">{stats.putOuts}</TableCell>
                <TableCell align="center">{stats.assists}</TableCell>
                <TableCell align="center">{stats.errors}</TableCell>
                <TableCell align="center">{stats.doublePlays}</TableCell>
                <TableCell align="center">{stats.fielding}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default FieldingChart;
// games, games started, innings, opportunities (chances), putouts
//assists, errors, double plays, fielding percentage (FPCT)
