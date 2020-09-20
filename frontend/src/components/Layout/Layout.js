import React, { Component } from "react";
import "./Layout.scss";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return <div className="layout">{children}</div>;
  }
}

export default Layout;
