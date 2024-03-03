import React from "react";
import { Container} from "react-bootstrap";
import Toolstack from "./Toolstack";
import "../../App.css"
import tailwind from "../../Images/tailwind-css.webp";
import bootstrap from "../../Images/bootstrap-logo.png"
import java from "../../Images/kisspng-logo-java-runtime-environment-programming-language-java-util-concurrentmodificationexception-Ömer-5b6766ab5dba25.7100170215335031473839.png"
import firebase from "../../Images/kisspng-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-5b1bf7831a5909.5705156015285594911079.png"
import nodejs from "../../Images/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png"
import javascript from "../../Images/javascript-39404.png"
import html from "../../Images/html5-logo-31813.png"
import react from "../../Images/1174949_js_react js_logo_react_react native_icon.png"
import css from "../../Images/PngItem_1985012.png"
import mongodb from "../../Images/MongoDB_logo_PNG2.png"
import redux from "../../Images/5848309bcef1014c0b5e4a9a.png"
import express from "../../Images/pngfind.com-pc-master-race-png-1363736.png"
import git from "../../Images/5847f981cef1014c0b5e48be.png"

function Skills() {
  return (
    <div id="skills" className="allskills">
      <Container>
        <div className="skill-name">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        </div>
        <div className="skills-container">
        <div className="skills-card">
        <img style={{ width: "70%" }} src={html} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{ fontSize: "20px" }}>HTML</p>
      </div>
      <div className="skills-card">
        <img style={{width:"65%"}} src={css} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>CSS</p>
      </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={javascript} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Javascript</p>
      </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={nodejs} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Node</p>
        </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={react} className="skills-card-img" alt="skill"/>
        <p className="skills-card-name" style={{fontSize:"20px"}}>React</p>
        </div>
      <div className="skills-card">
        <img style={{width:"110%",marginLeft:"-9px"}} src={mongodb} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Mongodb</p>
        </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={git} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Git</p>
        </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={firebase} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Firebase</p>
        </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={express} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Express</p>
        </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={redux} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Redux</p>
        </div>
      <div className="skills-card">
        <img style={{width:"70%"}} src={java} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Java</p>
        </div>
        <div className="skills-card">
        <img style={{width:"70%"}} src={bootstrap} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Bootstrap</p>
        </div>
        <div className="skills-card">
        <img style={{width:"70%"}} src={tailwind} className="skills-card-img" alt="skill" />
        <p className="skills-card-name" style={{fontSize:"20px"}}>Tailwind</p>
        </div>
      </div>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </div>
  );
}

export default Skills;
