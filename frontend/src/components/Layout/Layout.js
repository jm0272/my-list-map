import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return <div className="layout">{children}</div>;
  }
}

export default Layout;
