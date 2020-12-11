import React from "react";
import NavButton from "../NavButton/NavButton.component";
import "./NavBar.styles.scss";

const NavBar = (props) => (
  <nav className="nav-bar">
    <NavButton {...props} />
  </nav>
);

export default NavBar;
