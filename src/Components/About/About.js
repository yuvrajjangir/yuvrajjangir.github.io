import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Images/about.png"
import AboutCard from "./AboutCard";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";



function About() {
  return (
    <Container fluid id="about" className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1  style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view" >
      <Card.Body >
        <blockquote className="blockquote mb-0"  >
          <div id="user-detail-intro" style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yuvraj Jangir </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I'm passionate <span className="purple">Full-stack web developer</span>, proudly equipped with a comprehensive skill set from <span className="purple">Masai School's</span> intensive full-stack web development course. In addition, I hold a <span className="purple">Bachelor Degree in Commerce</span> from Chirawa College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </div>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening To Musics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "In the middle of difficulty lies opportunity."{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein </footer>
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
