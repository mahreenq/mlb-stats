//import Typography from "@material-ui/core/Typography";
import "./styles.css";

import React, { Component } from "react";
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class PitchingChart extends Component {
  // const classes = useStyles();
  render() {
    console.log("pitching stats", this.props.stats.splits[0].stat);
    const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
    
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

    return (
      <div className="rootTable">
      <h1>PITCHING TABLE </h1>
      <Paper className="paperTable">
        <Table className="table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">10</TableCell>
                <TableCell align="right">20</TableCell>
                <TableCell align="right">30</TableCell>
                <TableCell align="right">40</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
 
    );
  }
}

export default PitchingChart;

// games pitched, games started, wins, losses, win/loss percentage
// complete games, shutouts, quality starts, saves, holds, innings pitched
// hits, runs, earned runs, home runs allowed, base on balls (walks), strikeouts, 
// ERA