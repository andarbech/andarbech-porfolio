import React from "react";
import {BsPatchCheckFill} from "react-icons/bs";
import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Mongo</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>PHP</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>MySql</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Python</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill />
              <div>
                <h4>Symfony</h4>
                <small className="text-light">testing</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
