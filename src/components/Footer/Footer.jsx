import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rabeh2020ken@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Kenandarabeh" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/rabeh-kenanda-577a69251/" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/kenandarabeh/" target="_blank" rel="noopener noreferrer">
            <Insta color="white" size={"3rem"} />
          </a>


        </div>

        <p className="f-bottom-text">Produced by Kenanda Abdelouahad Rabah</p>



      </div>

    </div>
  );
};

export default Footer;
