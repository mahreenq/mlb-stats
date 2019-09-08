import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

import { withRouter } from "react-router-dom";

class Layout extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <div>
        <Header path={path} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(Layout);
