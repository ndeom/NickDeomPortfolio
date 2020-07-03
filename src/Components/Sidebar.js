import React from "react";
import "../Styles/Sidebar.scss";
import LinkedInSVG from "../Icons/LinkedInSVG";
import InstagramSVG from "../Icons/InstagramSVG";
import GithubSVG from "../Icons/GithubSVG";

export default function Footer() {
  return (
    <div id="sidebar">
      <SideBarList>
        <SideBarListItem
          href={"https://www.linkedin.com/in/nicholas-deom-4546ab71/"}
          icon={<LinkedInSVG />}
        />
        <SideBarListItem
          href={"https://github.com/ndeom"}
          icon={<GithubSVG />}
        />
        <SideBarListItem
          href={"https://www.instagram.com/nick.deom/"}
          icon={<InstagramSVG />}
        />
      </SideBarList>
    </div>
  );
}

function SideBarList(props) {
  return <ul id="sidebar-icon-list">{props.children}</ul>;
}

function SideBarListItem(props) {
  return (
    <li>
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.icon}
      </a>
    </li>
  );
}
