import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "../Skills/Github";
import tailwind from "../../Images/tailwind-css.webp";
import html from "../../Images/html5-logo-31813.png";
import bedbath from "../../Images/bed bath and beyond.png";
import js from "../../Images/javascript-39404.png";
import css from "../../Images/PngItem_1985012.png";
import Button from "react-bootstrap/Button";
import gsap from "../../Images/gsap.png";
import { SiGithub, SiGooglechrome } from "react-icons/si";
import car from "../../Images/3d-car.png";
import sqs from "../../Images/sqs.png";
import { CgWebsite } from "react-icons/cg";
import confluence from "../../Images/confluence.avif";
import masai from "../../Images/masai.png";
import pubsub from "../../Images/pub-sub.svg";
import notion from "../../Images/notion.png";
import redis from "../../Images/redis.svg";
import meta from "../../Images/meta.webp";
import postgresql from "../../Images/postgresql.png";
import azure from "../../Images/azure.png";
import jira from "../../Images/jira.svg";
import kuburnetes from "../../Images/kuburnetes.png";
import vertex from "../../Images/vertex.webp";
import nest from "../../Images/nest.svg";
import jenkins from "../../Images/jenkins.png";
import aws from "../../Images/aws.png";
import Gcp from "../../Images/Gcp.png";
import xfinite from "../../Images/xfinite.jpeg";
import alpha from "../../Images/alphaframe.jpg"
import llm from "../../Images/llm.jpg"
import meet from "../../Images/meet.png"
import git from "../../Images/git.png"
import slack from "../../Images/slack.png"
function Experience() {
  return (
    <Container fluid id="experience" className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few key experiences that have shaped my professional
          journey recently
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            marginTop: "-1rem",
          }}
        >
          <Col md={4} className="project-card">
            <div className="project-card-view">
              <img
                variant="top"
                className="card-img-top-exp"
                src={masai}
                alt="logo"
              ></img>
              <h2 className="project-title">Masai School</h2>
              <h6 className="purple-exp">Assessment Assistant</h6>
              <h7 className="purple-exp-date">March 2024 - August 2024</h7>
              <br></br> 
              <h7 className="purple-exp-year">6 months</h7>
              <p className="project-description-exp">
                Conducted technical interviews to assess student readiness,
                providing detailed feedback for improvement. Collaborated on
                developing fair evaluation criteria, ensuring consistency in
                assessments. Mentored students on technical interview skills,
                boosting their confidence and proficiency through personalized
                coaching.
              </p>
              <div className="project-tech-stacks" id="project-imgs-exp">
                <img src={meet} alt="tech"></img>
                <img src={git} alt="tech"></img>
                <img src={slack} alt="tech"></img>
              </div>
              <Button
                href="https://www.masaischool.com/"
                className="project-github-link"
                id="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGooglechrome
                  style={{ marginRight: "5px", marginBottom: "3px" }}
                ></SiGooglechrome>
                Company Web
              </Button>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <div className="project-card-view">
              <img
                variant="top"
                className="card-img-top-exp"
                src={xfinite}
                alt="logo"
              ></img>
              <h2 className="project-title">
                Xfinite Technologies Private Limited{" "}
              </h2>
              <h6 className="purple-exp">Back-End Developer</h6>
              <h7 className="purple-exp-date">April 2024 - September 2025</h7>
              <br></br> 
              <h7 className="purple-exp-year">1 year 6 months</h7>
              <p className="project-description-exp">
                Working with the development team to design, develop, and
                maintain web applications using Node & Express, React, and
                MongoDB. Participating in the full software development
                lifecycle, while building efficient and reusable code.
                Collaborating with cross-functional teams to ensure timely
                project delivery and debugging issues. Additionally,
                contributing to innovative projects, including the creation of a
                SaaS platform powered by AI, with a focus on Generative AI and
                blockchain technologies.
              </p>
              <h2 className="techstacks">Techstacks:</h2>
              <div className="project-tech-stacks" id="project-imgs-exp">
                <img src={aws} alt="tech"></img>
                <img src={Gcp} alt="tech"></img>
                <img src={jenkins} alt="tech"></img>
                <img src={nest} alt="tech"></img>
                <img src={vertex} alt="tech"></img>
                <img src={kuburnetes} alt="tech"></img>
                <img src={jira} alt="tech"></img>
                <img src={azure} alt="tech"></img>
                <img src={postgresql} alt="tech"></img>
                <img src={meta} alt="tech"></img>
                <img src={redis} alt="tech"></img>
                <img src={pubsub} alt="tech"></img>
                <img src={sqs} alt="tech"></img>
                <img src={confluence} alt="tech"></img>
              </div>
              <Button
                href="https://www.xfinite.io/"
                className="project-github-link"
                id="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGooglechrome
                  style={{ marginRight: "5px", marginBottom: "3px" }}
                ></SiGooglechrome>
                Company Web
              </Button>
            </div>
          </Col>
          <Col md={4} className="project-card">
            <div className="project-card-view">
              <img
                variant="top"
                className="card-img-top-exp"
                src={alpha}
                alt="logo"
              ></img>
              <h2 className="project-title">AlphaFrame Private Limited</h2>
              <h6 className="purple-exp">Full Stack Staff Engineer</h6>
              <h7 className="purple-exp-date">September 2025 - Present</h7>
              <p className="project-description-exp">
                As a Full Stack Staff Engineer, I design, develop, and maintain scalable software systems while ensuring code quality, performance, and security. I collaborate with cross-functional and GTM teams to align technical solutions with business needs and mentor junior developers to drive engineering excellence. My work includes building a SaaS platform powered by AI, Generative AI, and LLM agents, leveraging Node.js, Express, React, and MongoDB to deliver efficient, reusable, and production-ready applications.
              </p>
              <h2 className="techstacks">Techstacks:</h2>
              <div className="project-tech-stacks" id="project-imgs-exp">
                <img src={aws} alt="tech"></img>
                <img src={Gcp} alt="tech"></img>
                <img src={jenkins} alt="tech"></img>
                <img src={nest} alt="tech"></img>
                <img src={kuburnetes} alt="tech"></img>
                <img src={azure} alt="tech"></img>
                <img src={postgresql} alt="tech"></img>
                <img src={meta} alt="tech"></img>
                <img src={redis} alt="tech"></img>
                <img src={pubsub} alt="tech"></img>
                <img src={llm} alt="tech"></img>
                <img src={notion} alt="tech"></img>
              </div>
              <Button
                href="https://www.masaischool.com/"
                className="project-github-link"
                id="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGooglechrome
                  style={{ marginRight: "5px", marginBottom: "3px" }}
                ></SiGooglechrome>
                Company Web
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
