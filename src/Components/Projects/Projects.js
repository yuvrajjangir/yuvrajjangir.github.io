import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "../Skills/Github";
import tailwind from "../../Images/tailwind-css.webp";
import html from "../../Images/html5-logo-31813.png"
import bedbath from "../../Images/bed bath and beyond.png"
import js from "../../Images/javascript-39404.png"
import css from "../../Images/PngItem_1985012.png"
import Button from "react-bootstrap/Button";
import gsap from "../../Images/gsap.png"
import { SiGithub } from "react-icons/si";
import car from "../../Images/3d-car.png"
import logbook from "../../Images/taxtim-logbook.png"
import { CgWebsite } from "react-icons/cg";
import valorant from "../../Images/valorant.png"
import bootstrap from "../../Images/bootstrap-logo.png"
import firebase from "../../Images/kisspng-firebase-cloud-messaging-google-cloud-messaging-api-as-a-service-5b1bf7831a5909.5705156015285594911079.png"
import alcazar from "../../Images/Alcazar.png"
import mongodb from "../../Images/MongoDB_logo_PNG2.png"
import pharmeasy from "../../Images/Pharmeasy.png"
import taxti from "../../Images/Taxtim.png"
import express from "../../Images/pngfind.com-pc-master-race-png-1363736.png"
import nodejs from "../../Images/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png"
import react from "../../Images/1174949_js_react js_logo_react_react native_icon.png"
import redux from "../../Images/5848309bcef1014c0b5e4a9a.png"
function Projects() {
  return (
    <Container fluid id="projects" className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px",marginTop:"-1rem" }}>
        <Col md={4} className="project-card">
            <div className="project-card-view">
                <img variant="top" className="card-img-top" src={alcazar} alt="logo"></img>
           <h2 className="project-title">Alcazar Travel Agency</h2>
           <p className="project-description">Welcome to Alcazar Travel Agency, your gateway to unforgettable travel experiences! At Alcazar, we specialize in curating exceptional journeys that cater to your wanderlust.</p>
           <h2 className="techstacks">Techstacks:</h2>
           <div className="project-tech-stacks" id="project-imgs">
            <img src={html} alt="tech"></img>
            <img src={css} alt="tech"></img>
            <img src={js} alt="tech"></img>
            <img src={bootstrap} alt="tech"></img>
            <img src={firebase} alt="tech"></img>
           </div>
           <Button href="https://github.com/yuvrajjangir/devilish-drop-2377" className="project-github-link" id="github" target="_blank" rel="noopener noreferrer"><SiGithub style={{marginRight:"5px"}}></SiGithub>Github</Button>
           <Button href="https://silver-selkie-a62ab9.netlify.app/" className="project-deployed-link" id="github" target="_blank" rel="noopener noreferrer"><CgWebsite style={{marginRight:"5px"}}></CgWebsite>Demo</Button>
           </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
                <img variant="top" className="card-img-top" src={pharmeasy} alt="logo"></img>
           <h2 className="project-title">PharmEasy</h2>
           <p className="project-description">Welcome to PharmEasy, an online healthcare platform designed to revolutionize the way you access medicines and healthcare products.Our platform is dedicated to providing you with a seamless experience.</p>
           <h2 className="techstacks">Techstacks:</h2>
           <div className="project-tech-stacks" id="project-imgs">
            <img src={html} alt="tech"></img>
            <img src={css} alt="tech"></img>
            <img src={js} alt="tech"></img>
           </div>
           <Button href="https://github.com/pw033/skillful-dog-1445" className="project-github-link" id="github" target="_blank" rel="noopener noreferrer"><SiGithub style={{marginRight:"5px"}}></SiGithub>Github</Button>
           <Button href="https://remarkable-narwhal-4ada63.netlify.app/" className="project-deployed-link" id="github" target="_blank" rel="noopener noreferrer"><CgWebsite style={{marginRight:"5px"}}></CgWebsite>Demo</Button>
           </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
                <img variant="top" className="card-img-top" src={bedbath} alt="logo"></img>
           <h2 className="project-title">Bed Bath & Beyond</h2>
           <p className="project-description">Welcome to our online retail platform inspired Bed Bath & Beyond, a renowned destination for home goods, decor, and lifestyle essentials.</p>
           <h2 className="techstacks">Techstacks:</h2>
           <div className="project-tech-stacks" id="project-imgs">
            <img src={html} alt="tech"></img>
            <img src={css} alt="tech"></img>
            <img src={js} alt="tech"></img>
            <img src={firebase} alt="tech"></img>
            <img src={bootstrap} alt="tech"></img>
           </div>
           <Button href="https://github.com/yuvrajjangir/pw134-high-fruit-9045" className="project-github-link" id="github" target="_blank" rel="noopener noreferrer"><SiGithub style={{marginRight:"5px"}}></SiGithub>Github</Button>
           <Button href="https://effortless-raindrop-0b52c3.netlify.app/" className="project-deployed-link" id="github" target="_blank" rel="noopener noreferrer"><CgWebsite style={{marginRight:"5px"}}></CgWebsite>Demo</Button>
           </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
                <img variant="top" className="card-img-top" src={taxti} alt="logo"></img>
           <h2 className="project-title">TaxTim</h2>
           <p className="project-description">TaxTim is an intuitive and user-friendly online tax filing platform designed to simplify the tax return process for individuals and businesses.</p>
           <h2 className="techstacks">Techstacks:</h2>
           <div className="project-tech-stacks" id="project-imgs">
            <img src={react} alt="tech"></img>
            <img src={redux} alt="tech"></img>
            <img src={firebase} alt="tech"></img>
            <img src={bootstrap} alt="tech"></img>
           </div>
           <Button href="https://github.com/Sakuu89/TaxTim" className="project-github-link" id="github" target="_blank" rel="noopener noreferrer"><SiGithub style={{marginRight:"5px"}}></SiGithub>Github</Button>
           <Button href="https://super-peony-e095c9.netlify.app/" className="project-deployed-link" id="github" target="_blank" rel="noopener noreferrer"><CgWebsite style={{marginRight:"5px"}}></CgWebsite>Demo</Button>
           </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
                <img variant="top" className="card-img-top" src={logbook} alt="logo"></img>
           <h2 className="project-title">Logbook-App</h2>
           <p className="project-description">The logbook app simplifies daily tracking, organizing tasks, and managing schedules efficiently. Ideal for professionals and students alike, it ensures seamless organization and productivity on the go.</p>
           <h2 className="techstacks">Techstacks:</h2>
           <div className="project-tech-stacks" id="project-imgs">
            <img src={react} alt="tech"></img>
            <img src={redux} alt="tech"></img>
            <img src={nodejs} alt="tech"></img>
            <img src={express} alt="tech"></img>
            <img src={js} alt="tech"></img>
            <img src={mongodb} alt="tech"></img>
           </div>
           <Button href="https://github.com/yuvrajjangir/TaxTim-LogBook-App" className="project-github-link" id="github" target="_blank" rel="noopener noreferrer"><SiGithub style={{marginRight:"5px"}}></SiGithub>Github</Button>
           <Button href="https://tax-tim-log-book-app.vercel.app/" className="project-deployed-link" id="github" target="_blank" rel="noopener noreferrer"><CgWebsite style={{marginRight:"5px"}}></CgWebsite>Demo</Button>
           </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
                <img variant="top" className="card-img-top" src={car} alt="logo"></img>
           <h2 className="project-title">3D-Car-Animation</h2>
           <p className="project-description">
Experience the future of automotive design with our captivating 3D car animation website. Explore every angle of our sleek model, showcasing cutting-edge technology and design innovation.</p>
           <h2 className="techstacks">Techstacks:</h2>
           <div className="project-tech-stacks" id="project-imgs">
            <img src={html} alt="tech"></img>
            <img src={css} alt="tech"></img>
            <img src={js} alt="tech"></img>
            <img src={tailwind} alt="tech"></img>
           </div>
           <Button href="https://github.com/yuvrajjangir/3D-Car-Animation" className="project-github-link" id="github" target="_blank" rel="noopener noreferrer"><SiGithub style={{marginRight:"5px"}}></SiGithub>Github</Button>
           <Button href="https://car-animation-gules.vercel.app/" className="project-deployed-link" id="github" target="_blank" rel="noopener noreferrer"><CgWebsite style={{marginRight:"5px"}}></CgWebsite>Demo</Button>
           </div>
          </Col>

          <Col md={4} className="project-card">
            <div className="project-card-view">
                <img variant="top" className="card-img-top" src={valorant} alt="logo"></img>
           <h2 className="project-title">Valorant Agents</h2>
           <p className="project-description">Create a dynamic website showcasing Valorant agents' banners, offering a visually immersive experience. Explore each agent's unique attributes through high-quality imagery for an engaging gaming resource.</p>
           <h2 className="techstacks">Techstacks:</h2>
           <div className="project-tech-stacks" id="project-imgs">
            <img src={html} alt="tech"></img>
            <img src={css} alt="tech"></img>
            <img src={js} alt="tech"></img>
            <img src={gsap} alt="tech"></img>
           </div>
           <Button href="https://github.com/yuvrajjangir/valorant-agents-banner/tree/main" className="project-github-link" id="github" target="_blank" rel="noopener noreferrer"><SiGithub style={{marginRight:"5px"}}></SiGithub>Github</Button>
           <Button href="https://valorant-agents-banner.vercel.app/" className="project-deployed-link" id="github" target="_blank" rel="noopener noreferrer"><CgWebsite style={{marginRight:"5px"}}></CgWebsite>Demo</Button>
           </div>
          </Col>
        </Row>
      </Container>
      <Github />
    </Container>
  );
}

export default Projects;
