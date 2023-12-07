import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function Skills() {
  return (
    <Container fluid className="" id="skills" style={{backgroundColor:"#0c0513",paddingTop: "30px", paddingBottom: "50px"}}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px",marginTop:"4.5rem" }}>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <Github />
      </Container>
    </Container>
  );
}

export default Skills;
