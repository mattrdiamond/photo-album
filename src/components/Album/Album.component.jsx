import React from "react";
import { Link } from "react-router-dom";
import "./Album.styles.scss";

const Album = ({ id, title, index }) => {
  return (
    <Link
      to={{
        pathname: `/albums/${id}/photos`,
        state: {
          title,
          id,
        },
      }}
      className="album"
    >
      <span className="album-number">Album {index + 1}</span>
      <span className="album-title">{title}</span>
    </Link>
  );
};

export default Album;
