import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiNetlify,
  SiCodesandbox,
  SiReplit,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="skills-card">
        <SiCodesandbox />
      </Col>
      <Col xs={4} md={2} className="skills-card">
        <SiReplit />
      </Col>
      <Col xs={4} md={2} className="skills-card">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="skills-card">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="skills-card">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="skills-card">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="skills-card">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
