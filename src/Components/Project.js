import React from "react";
import "../Styles/Project.scss";

export default function Project(props) {
  return (
    <div className="project">
      <h3 className="project-title">
        <a
          className="title-link"
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
      </h3>
      <a
        className="image-link"
        href={props.projectLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.src} alt={`${props.title}`} className="project-image" />
      </a>
      <br />
      <br />
      {props.children}
    </div>
  );
}
