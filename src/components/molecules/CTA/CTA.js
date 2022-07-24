import React from "react";
import CV from "../../../../public/assets/andarbech_resumen.pdf";
import "./CTA.css"
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn"> Dowload CV</a>
      <a href="#contact" className="btn btn-primary"> Let's Talk</a>
    </div>
  );
};

export default CTA;
