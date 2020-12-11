import React from "react";
import Users from "../Users/Users.component";
import "./Sidebar.styles.scss";

const Sidebar = ({ sidebarOpen, ...props }) => {
  console.log("sidebarOpen", sidebarOpen);
  return (
    <section className={"sidebar" + (!sidebarOpen ? " hidden" : "")}>
      <h2>Users</h2>
      <Users sidebarOpen={sidebarOpen} {...props} />
    </section>
  );
};

export default Sidebar;
