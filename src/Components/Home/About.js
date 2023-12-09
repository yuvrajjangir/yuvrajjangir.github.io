import React from "react";
import {Row, Col } from "react-bootstrap";
import myImg from "../../Images/profile.jpeg";
import Tilt from "react-parallax-tilt";


function About() {
  return (
      <div id="about" className="about-section">
        <h1 style={{ fontSize: "2.6em",color:"white" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
        <Row >
          <Col md={8} className="home-about-description" id="user-detail-intro">
            <p className="home-about-body">
            Hi there! 👋, I'm full-stack web developer with a unique journey into the tech world.  🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Go. </b>
              </i>
              <br />
              <br />
              While my educational background might not be in technology, my passion for creating  &nbsp;
              <i>
                <b className="purple">digital experiences has been a driving force in my career. </b> and
                relishing the art of creating engaging{" "}
                <b className="purple">
                user interfaces. 
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="home-img" alt="avatar" style={{ borderRadius: "50%",width:"80%" }}
 />
            </Tilt>
          </Col>
        </Row>
      </div>
  );
}
export default About;
