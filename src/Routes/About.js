import React from "react";
import Footer from "../Components/Footer";
import "../Styles/About.scss";

export default function About() {
    return (
        <div id="about">
            <div id="about-content" className="content-container">
                <h2 id="about-title">about</h2>
                <p>
                    Hi, my name's Nick. I currently work as a chemical engineer developing new
                    chemical manufacturing processes. My goal is to change career paths and take the
                    dive into software engineering. I want to work somewhere where I can make
                    substantial contributions to projects I work on, continually build my skills,
                    and innovate in a fast-paced and ever-evolving industry.
                </p>
                <p>Here's where I've worked so far:</p>
                <JobList>
                    <ListItem
                        href={"https://jasperhelps.com/"}
                        company={"Jasper Financial"}
                        role={"Software Developer Intern"}
                        dates={"January 2021 - Present"}
                    />
                    <ListItem
                        href={"https://www.swri.org/"}
                        company={"SwRI"}
                        role={"Process Development Engineer"}
                        dates={"July 2017 - April 2020, January 2021 - Present"}
                    />
                    <ListItem
                        href={"https://engineering.purdue.edu/Powerlab/Pages/MainPages/Home.html"}
                        company={"Purdue University"}
                        role={"Undergraduate Researcher"}
                        dates={"January 2015 - May 2016"}
                    />
                </JobList>
                <p>And my education:</p>
                <JobList>
                    <ListItem
                        href={"https://www.purdue.edu/"}
                        company={"Purdue University"}
                        role={"BS in Chemical Engineering"}
                        dates={"August 2012 - May 2016"}
                    />
                </JobList>
                <hr></hr>
                <p>
                    Outside of work you can find me running, cooking, hiking, or attending smaller
                    live music shows.
                </p>
            </div>
            <br />
            <Footer />
        </div>
    );
}

function JobList(props) {
    return <ul className="job-list">{props.children}</ul>;
}

function ListItem(props) {
    return (
        <li>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                ↳ <span className="company">{props.company}</span>
            </a>{" "}
            <span className="role"> {props.role},</span>
            <span className="dates">{props.dates}</span>
        </li>
    );
}
