import React from "react";
import "./Photo.styles.scss";

const Photo = ({ url, title }) => (
  <a className="photo" href={url} target="_blank" rel="noopener noreferrer">
    <figure className="img-container">
      <img src={url} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  </a>
);

export default Photo;
