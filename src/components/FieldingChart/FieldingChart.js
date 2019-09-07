//import Typography from "@material-ui/core/Typography";
import "./styles.css";

import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class FieldingChart extends Component {
  // const classes = useStyles();
  render() {
    console.log("fielding stats", this.props.stats.splits[0].stat);
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
      <h1>FIELDING TABLE </h1>
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

export default FieldingChart;

