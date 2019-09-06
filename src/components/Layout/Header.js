import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Header = ({ path }) => {
  return (
    <div className="header">
      <div className="nav">
        {path === "/" ? null : <Link to="/"> <Typography variant="button" display="block" gutterBottom>
        HOME
      </Typography> </Link>}
      </div>
      <Typography variant="h3" gutterBottom>
        Major League Baseball
      </Typography>
    </div>
  );
};

export default Header;

{
  /* <Link to="/about">
<div className="headerLink">ABOUT</div>
</Link>
<Link to="/showcase">SHOWCASE</Link> */
}
