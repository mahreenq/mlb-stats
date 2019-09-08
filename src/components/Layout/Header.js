import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Header = ({ path }) => {
  return (
    <div className="header">
      <div className="nav">
        {path === "/" ? null : (
          <Link to="/">
            <img
              src="http://www.mlbstatic.com/team-logos/league-on-dark/1.svg"
              height="20"
              alt="Major League Baseball Logo"
              className="mlbLogoSmall"
            />
          </Link>
        )}
      </div>
      <Typography variant="h4" gutterBottom>
        Major League Baseball
      </Typography>
      {path === "/" ? (
        <img
          src="http://www.mlbstatic.com/team-logos/league-on-dark/1.svg"
          height="100"
          alt="Major League Baseball Logo"
          className="mlbLogo"
        />
      ) : null}
    </div>
  );
};

export default Header;
