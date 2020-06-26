import React from "react";
import Footer from "../Components/Footer";
import "../Styles/Contact.scss";

export default function Contact() {
  return (
    <div id="contact">
      <div id="contact-content">
        <h2 id="contact-title">contact</h2>
        <p>
          Want to talk about an opportunity at your company? Send me an{" "}
          <a id="email-link" href="mailto:nicholasdeom@gmail.com">
            EMAIL
          </a>{" "}
          or check me out on{" "}
          <a
            href="https://www.linkedin.com/in/nicholas-deom-4546ab71/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          ,{" "}
          <a
            href="https://github.com/ndeom"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          , or{" "}
          <a
            href="https://www.instagram.com/nick.deom/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          .
        </p>
      </div>
      <Footer />
    </div>
  );
}
