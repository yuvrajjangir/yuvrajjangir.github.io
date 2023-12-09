import React from "react";
import {Col } from "react-bootstrap";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail, CgPhone } from "react-icons/cg";

function Contact() {
return(
    <div id="contact">
          <Col md={12} className="home-about-social">
            <h1> Feel Free To<span className="purple"> Connect</span></h1>
            <p style={{fontSize:"20px"}}>
              Find Me<span className="purple"> On :</span>
            </p>
        <div id="contact-phone">
            <span className="purple">
                8094374577
                </span>
            </div>
            <div id="contact-email">
            <span className="purple">
                yuvijangir78@gmail.com
                </span>
            </div>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:yuvijangir78@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-email"
                  className="icon-colour  home-social-icons"
                >
                  <CgMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+918094374577"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-phone"
                  className="icon-colour  home-social-icons"
                >
                  <CgPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/yuvrajjangir"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-github"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="https://twitter.com/Yuvi21156153"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                href="https://www.linkedin.com/in/yuvraj-jangir-646583242/"
                  target="_blank"
                  rel="noreferrer"
                  id="contact-linkedin"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/theycallmeuvvv/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </div>
);
}

export default Contact;