import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Design from "../../img/design-thinking.png";
import web from "../../img/web.png";
import app from "../../img/app-development.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import cv from './CV rabah kenamda.19e2051bb5b9e24aff09.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane style={{ color: darkMode ? "white" : "" }}>
          Welcome to my world of creativity and innovation!
        </spane>
        <a href={cv} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Design}
            heading={"Design"}
            detail={" Figma, Sketch, Photoshop, Adobe Illustrator, Adobe XD, Microsoft Word document and excel."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={web}
            heading={"Web Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express, php, sql, mongodb."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={app}
            heading={"App Developer"}
            detail={"Experienced in crafting cross-platform mobile apps for Android and iOS by flutter."}
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
