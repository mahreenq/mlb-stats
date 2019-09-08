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
          <h1> That ball is out of the park! </h1>
          <h2> You've reached a page that does not exist </h2>
          <h3>
            Go back <Link to="/"> home </Link>
          </h3>
        </div>
      </div>
    );
  }
}
export default NotFound;
