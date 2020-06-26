import React from "react";
import Footer from "../Components/Footer";
import "../Styles/About.scss";

export default function About() {
  return (
    <div id="about">
      <div id="about-content" className="content-container">
        <h2 id="about-title">about</h2>
        <p>
          Hi, my name's Nick. I currently work as a chemical engineer in
          research and and development. My goal is to change career paths and
          take the dive into software development where I can meaningfully
          contribute to projects I work on, build on my skills, and participate
          in a rapidly and ever-evolving industry. <br></br>
          <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>Here's my work experience so far:</p>
        <ul id="job-list">
          <li>
            ↳{" "}
            <a
              href="https://www.swri.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="company">SwRI</span>
            </a>
            <span className="role">
              {" "}
              Process Development Engineer, July 2017 - March 2020
            </span>
          </li>
          <li>
            ↳{" "}
            <a
              href="https://www.purdue.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="company">Purdue University</span>
            </a>
            <span className="role">
              {" "}
              Undergraduate Researcher, January 2015 - May 2016
            </span>
          </li>
        </ul>
        <hr></hr>
        <p>
          Outside of work, my hobbies include running, cooking, hiking, and
          attending live music
        </p>
      </div>
      <Footer />
    </div>
  );
}
