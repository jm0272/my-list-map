import React, { Component } from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
  render() {
    return (
      // <div className="header-layout">header Area</div>
      <nav className="header-layout navbar">
        <div className="navbar__logo">
          <MenuIcon></MenuIcon>
          <a href="" className="">
            My List Map
          </a>
        </div>
        <div className="navbar__menu"></div>
      </nav>
    );
  }
}

export default Header;
