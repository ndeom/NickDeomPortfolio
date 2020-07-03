import React from "react";
import "../Styles/Project.scss";

export default function Project(props) {
  return (
    <div className="project">
      <h3 className="project-title">{props.title}</h3>
      <img
        src={props.src}
        alt={`${props.title}`}
        className="project-image"
      ></img>
      <br />
      <br />
      {props.children}
    </div>
  );
}
