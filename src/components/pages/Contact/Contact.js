import React from "react";
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import {useRef} from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.YOUR_SERVICE_ID,
      process.env.YOUR_TEMPLATE_ID,
      form.current,
      process.env.YOUR_PUBLIC_KEY
    );
    e.target.reset();
  };
  return (
    <section className="container" id="contact">
      <div className="contact__container-fix">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>andarbech1@gmail.com</h5>
              <a href="mailto:andarbech1@gmail.com" target="_blank">
                Send a Message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+34613555895</h5>
              <a href="https://wa.me/34613555895" target="_blank">
                Send a Message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="text" name="email" placeholder="Your Email" required />
            <textarea name="message" cols="30" rows="7" required></textarea>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
