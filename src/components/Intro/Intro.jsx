import React, { useContext } from "react";
import "./Intro.css";
import Vector22 from "../../img/Vector22.png";


import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi I Am</span>
          <span>Kenanda Rabah</span>
          <span>
            As an adaptable Fullstack Developer, I weave web design, Flutter-powered Android/iOS apps, and graphic design into a symphony of excellence, all aimed at creating delightful user experiences.
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/Kenandarabeh" target="_blank" rel="noopener noreferrer"><img src={Github} alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/rabeh-kenanda-577a69251/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/kenandarabeh/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector22} alt="" />

      </div>
    </div>
  );
};

export default Intro;
