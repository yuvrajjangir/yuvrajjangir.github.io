import React from "react";
import { Container } from "react-bootstrap";
import Toolstack from "./Toolstack";
import "../../App.css";
import tailwind from "../../Images/tailwind-css.webp";
import bootstrap from "../../Images/bootstrap-logo.png";
import java from "../../Images/java.png";
import firebase from "../../Images/firebase.png";
import nodejs from "../../Images/nodejs.png";
import javascript from "../../Images/javascript-39404.png";
import html from "../../Images/html5-logo-31813.png";
import react from "../../Images/1174949_js_react js_logo_react_react native_icon.png";
import css from "../../Images/PngItem_1985012.png";
import mongodb from "../../Images/MongoDB_logo_PNG2.png";
import redux from "../../Images/5848309bcef1014c0b5e4a9a.png";
import express from "../../Images/pngfind.com-pc-master-race-png-1363736.png";
import git from "../../Images/5847f981cef1014c0b5e48be.png";
import pubsub from "../../Images/pub-sub.svg";
import redis from "../../Images/redis.svg";
import meta from "../../Images/meta.webp";
import postgresql from "../../Images/postgresql.png";
import azure from "../../Images/azure.png";
import kuburnetes from "../../Images/kuburnetes.png";
import vertex from "../../Images/vertex.webp";
import nest from "../../Images/nest.svg";
import jenkins from "../../Images/jenkins.png";
import aws from "../../Images/aws.png";
import Gcp from "../../Images/Gcp.png";
import sqs from "../../Images/sqs.png";
import restapi from "../../Images/restapi.jpeg";
import wordpress from "../../Images/wordpress.png";
import python from "../../Images/python.webp";
import microservices from "../../Images/microservices.png";
import awslambda from "../../Images/awslambda.svg";
import mysql from "../../Images/mysqllogo.webp";
import docker from "../../Images/docker.webp";

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
            <img
              style={{ width: "70%" }}
              src={html}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              HTML
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "65%" }}
              src={css}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              CSS
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={javascript}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Javascript
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={nodejs}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Node
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={react}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              React
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "110%", marginLeft: "-9px" }}
              src={mongodb}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Mongodb
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={git}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Git
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={firebase}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Firebase
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={awslambda}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              AWS Lambda
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={express}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Express
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={redux}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Redux
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={microservices}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              MicroServices
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={java}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Java
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={bootstrap}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Bootstrap
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={tailwind}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Tailwind
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={Gcp}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              GCP
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={restapi}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              RESTful APIs
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={wordpress}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              WordPress
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={python}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Python
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={azure}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Azure
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={aws}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              AWS
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={vertex}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Vertex-AI
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={nest}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Nestjs
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={kuburnetes}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Kubernetes
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={postgresql}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              PostgreSql
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={redis}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Redis
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={pubsub}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Pub/Sub
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={meta}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Meta Llama
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={jenkins}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Jenkins
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={sqs}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              AWS SQS
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={mysql}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              MySQL
            </p>
          </div>
          <div className="skills-card">
            <img
              style={{ width: "70%" }}
              src={docker}
              className="skills-card-img"
              alt="skill"
            />
            <p className="skills-card-name" style={{ fontSize: "20px" }}>
              Docker
            </p>
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
