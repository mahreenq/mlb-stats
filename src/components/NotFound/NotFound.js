import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

class NotFound extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="notFound">
        <div className="notFoundText">
          <h1> Oops, you've reached a page that does not exist </h1>
          <h3>
            Go back <Link to="/"> home </Link>
          </h3>
        </div>
      </div>
    );
  }
}
export default NotFound;
