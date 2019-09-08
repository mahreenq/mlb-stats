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
    const stats = this.props.stats.splits[0].stat;

    const playerData = {
      Games: `${stats.games}`,
      "Games Started": `${stats.gamesStarted}`,
      Innings: `${stats.innings}`,
      Opportunities: `${stats.chances}`,
      Putouts: `${stats.putOuts}`,
      Assists: `${stats.assists}`,
      Errors: `${stats.errors}`,
      "Double Plays": `${stats.doublePlays}`,
      "Fielding Percentage": `${stats.fielding}`
    };

    const keys = Object.keys(playerData);

    return (
      <div className="rootTable">
        <Paper className="paperTable">
          <Table className="table" size="small">
            <TableHead>
              <TableRow>
                <TableCell className="blue">FIELDING</TableCell>
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
                    <TableCell key={value + "fielding Stat"} align="center">
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

export default FieldingChart;
// games, games started, innings, opportunities (chances), putouts
//assists, errors, double plays, fielding percentage (FPCT)
