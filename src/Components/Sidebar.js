import React from "react";
import "../Styles/Sidebar.scss";
import LinkedInSVG from "../Icons/LinkedInSVG";
import InstagramSVG from "../Icons/InstagramSVG";
import GithubSVG from "../Icons/GithubSVG";

export default function Footer() {
  return (
    <div id="sidebar">
      <ul id="sidebar-icon-list">
        <li>
          <a
            href="https://www.linkedin.com/in/nicholas-deom-4546ab71/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInSVG />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ndeom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSVG />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nick.deom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramSVG />
          </a>
        </li>
      </ul>
    </div>
  );
}
