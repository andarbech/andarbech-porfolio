import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
const Socials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/arndresarboleda/">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/andarbech">
        <BsGithub />
      </a>
    </div>
  );
};

export default Socials;
