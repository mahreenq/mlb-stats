import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link } from "react-router-dom";

const Header = ({ path }) => {
  return (
    <div className="header">
      <div className="nav">
        {path === "/" ? null : (
          <Link to="/">
            <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
          </Link>
        )}
      </div>
      <Typography variant="h4" gutterBottom>
        Major League Baseball
      </Typography>
    </div>
  );
};

export default Header;
