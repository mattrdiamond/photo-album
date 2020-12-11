import React from "react";
import { Link } from "react-router-dom";
import "./User.styles.scss";

const User = ({
  name,
  id,
  email,
  website,
  avatar,
  activeUser,
  setActiveUser,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const isActive = id == activeUser ? true : false;

  const handleClick = () => {
    setActiveUser(id);

    if (window.innerWidth <= 800 && sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <li className={"user" + (isActive ? " active" : "")}>
      <Link to={`/albums/${id}`} onClick={handleClick}>
        <div className="user-wrapper">
          <img src={avatar} alt={name} className="avatar" />
          <div className="user-content">
            <span className="user-name">{name}</span>
            <span className="user-details">{email}</span>
            <span className="user-details">{website}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default User;
