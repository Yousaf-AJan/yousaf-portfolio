import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jan</h1>

        <ul className="footer__list">
          <li>
            <Link to="/about" className="footer__link">
              About
            </Link>
          </li>

          <li>
            <Link to="/work" className="footer__link">
              Projects
            </Link>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/yousaf-jan-96b8a42a9"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Yousaf-AJan"
            target="_blank"
            className="footer__social-link"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;