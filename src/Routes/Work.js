import React from "react";
import Project from "../Components/Project";
import Footer from "../Components/Footer";
import "../Styles/Work.scss";
import JobScrapeImg from "../Images/Job_Scrape_Img.png";
import FluidDynamicsImg from "../Images/React_AppImg.png";
import StockBOTImg from "../Images/StockBOTImg.png";
import PortfolioImg from "../Images/Portfolio_Img.png";

export default function Work() {
  return (
    <div id="work">
      <div id="work-content">
        <h2 id="work-title">work</h2>
        <Project title={"StockBOT"} src={StockBOTImg}>
          <p>
            StockBOT is a game where you play against a machine learning
            algorithm and the market to see who can get the biggest return on
            investment. The front end is made with{" "}
            <span className="emphasis">React</span> and{" "}
            <span className="emphasis">D3</span> and the back end is made with{" "}
            <span className="emphasis">Flask</span>,{" "}
            <span className="emphasis">Pandas</span>, and{" "}
            <span className="emphasis">Scikit-Learn</span>. Here are links to
            the{" "}
            <span className="emphasis">
              <a
                className="project-link"
                href="https://stockbotio.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                live demo
              </a>
            </span>{" "}
            and the{" "}
            <span className="emphasis">
              <a
                className="project-link"
                href="https://github.com/ndeom/StockBOT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github repo
              </a>
            </span>
            .
          </p>
        </Project>
        <Project title={"Job.Scrape()"} src={JobScrapeImg}>
          <p>
            Job.Scrape() is a web scraper that collects recent job postings from
            Stack Overflow, Hacker News, and TripleByte and makes them available
            to view in one place. The app is comprised of two parts: a front end
            made with <span className="emphasis">React</span> and{" "}
            <span className="emphasis">Redux</span> and an API endpoint made
            with <span className="emphasis">Express</span>,{" "}
            <span className="emphasis">Cheerio</span>, and a{" "}
            <span className="emphasis">MySQL</span> database hosted on{" "}
            <span className="emphasis">Amazon RDS</span>. Here are links to the{" "}
            <span className="emphasis">
              <a
                className="project-link"
                href="https://jobscrapeio.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                live demo
              </a>
            </span>{" "}
            as well as the Github repos for the{" "}
            <span className="emphasis">
              <a
                className="project-link"
                href="https://github.com/ndeom/Job.Scrape-"
                target="_blank"
                rel="noopener noreferrer"
              >
                front end
              </a>
            </span>{" "}
            and the{" "}
            <span className="emphasis">
              <a
                className="project-link"
                href="https://github.com/ndeom/Job.Scrape-API"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
            </span>
            .
          </p>
        </Project>
        <Project title={"Portfolio"} src={PortfolioImg}>
          <p>
            This website was made with <span className="emphasis">React</span>,{" "}
            <span className="emphasis">SASS</span>, and{" "}
            <span className="emphasis">P5</span> for the graphic on the home
            page. The repo can be found{" "}
            <span className="emphasis">
              <a
                className="project-link"
                href="https://github.com/ndeom/NickDeomPortfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </span>
            .
          </p>
        </Project>
        <Project title={"Fluid Dynamics Simulation App"} src={FluidDynamicsImg}>
          <div id="coming-soon">
            <span id="coming-soon-text">Coming Soon</span>
          </div>
          <p>
            This project is in the early stages of development and is a
            collaboration between myself and a personal friend. The app is meant
            to be a teaching tool that visualizes the formation and breakage of
            liquid droplets. When provided parameters it uses{" "}
            <span className="emphasis">Node</span> to spawn a child process and
            run a <span className="emphasis">Fortran</span> model on the back
            end. <span className="emphasis">React</span>,{" "}
            <span className="emphasis">D3</span>, and{" "}
            <span className="emphasis">SASS</span> are used to give the model a
            modern interface.
          </p>
        </Project>
      </div>
      <Footer />
    </div>
  );
}
