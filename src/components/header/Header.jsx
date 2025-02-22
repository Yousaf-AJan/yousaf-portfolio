import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("/");

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Yousaf!
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="/"
                onClick={() => setActiveNav("/home")}
                className={activeNav === "/" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/about"
                onClick={() => setActiveNav("/about")}
                className={activeNav === "/about" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/skills"
                onClick={() => setActiveNav("/skills")}
                className={activeNav === "/skills" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/work"
                onClick={() => setActiveNav("/work")}
                className={activeNav === "/work" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                onClick={() => setActiveNav("/contact")}
                className={activeNav === "/contact" ? "nav__link active-link" : "nav__link"}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
