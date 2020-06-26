import React from "react";
import "../Styles/Footer.scss";
import copyright from "../Icons/copyright.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <img id="copyright-img" src={copyright} alt="Copyright" />
      <span id="footer-text">NICK DEOM 2020</span>
    </footer>
  );
}
