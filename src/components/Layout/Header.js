import React from "react";
//import "./styles.css";
import { Link } from "react-router-dom";

const Header = ({ path }) => {
  return (
    <div className="header">
    <h1>HEADER</h1>
      <div className="nav">
        {path === "/" ? null : <Link to="/"> HOME </Link>}
      </div>
    </div>
  );
};

export default Header;

{/* <Link to="/about">
<div className="headerLink">ABOUT</div>
</Link>
<Link to="/showcase">SHOWCASE</Link> */}