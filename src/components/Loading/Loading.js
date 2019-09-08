import React, { Component } from "react";
import "./styles.css";
import CircularProgress from "@material-ui/core/CircularProgress";

class Loading extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="loadingContainer">
        <div>
          <CircularProgress size={150} thickness={10} color="secondary" />
        </div>
      </div>
    );
  }
}

export default Loading;
