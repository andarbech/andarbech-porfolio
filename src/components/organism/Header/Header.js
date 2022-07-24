import React from "react";
import CTA from "../../molecules/CTA/";
import "./header.css";
import photo from "../../../../public/assets/perfil.png";
import Socials from "../../molecules/Socials";
const HeaderComponent = () => {
  return (
    <header>
      <div className="container container_header"></div>
      <h5>Hello I'm</h5>
      <h1>Andres Arboleda</h1>
      <h5 className="text-light">Fullstack Developer </h5>
      <h5 className="text-light"></h5>
      <CTA />
      <Socials />
      <div className="me">
        <img src={photo} alt="andres" />
      </div>
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default HeaderComponent;