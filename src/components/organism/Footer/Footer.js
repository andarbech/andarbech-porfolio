import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Andres Arboleda
      </a>
      <ul>
        <li className="permalinks">
          <a href="#">Home</a>
          <a href="#about">about</a>
          <a href="#Experience">Experience</a>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.perfilin.com/in/arndresarboleda/">
          <BsLinkedin />
        </a>
        <a href="https://www.github.com/andarbech">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy;Andresito</small>
      </div>
    </footer>
  );
};

export default Footer;
