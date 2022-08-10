import React from "react";
import "./about.css";
import photo from "../../../../public/assets/perfil.png";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-imagen">
            <img src={photo} sre="andres" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Consulting companies</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ github </small>
            </article>
          </div>
          <p>
            I'm Bachelor in Business turned into Developer who is passionate
            about software technologies and Finance Analysis. Some technologies
            I enjoy working with are Docker, MERN (Mongo, Express, React, Node)
            LAMP (Linux, Apache, MySql, PHP) Stacks and MIcrosoft
            Enviroment(Azure, PowerApps, Power Automate).
            <hr />
            Off the computer you can find me playing chess or reading magical
            realism novels .
          </p>
          <a href="#contact" className="btn btn-primary">
            Talk with Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
