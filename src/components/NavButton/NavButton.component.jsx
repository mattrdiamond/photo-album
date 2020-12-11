import React from "react";
import "./NavButton.styles.scss";

const NavButton = ({ sidebarOpen, setSidebarOpen }) => (
  <div
    className={"nav-button" + (sidebarOpen ? " is-open" : "")}
    onClick={() => setSidebarOpen(!sidebarOpen)}
    role="button"
    aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
    aria-expanded={sidebarOpen ? true : false}
    tabIndex="0"
  >
    <div className="hamburger-btn">
      <div className="hamburger-bar"></div>
    </div>
  </div>
);

export default NavButton;
