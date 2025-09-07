import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Images/home-main.svg";
// import Particle from "../Particle";
import Type from "./Type";
import resu from "../../Images/Yuvraj _Jangir_Job_Profile.pdf";
import { CgFileDocument } from "react-icons/cg";
import home from "../../Images/home-bg.jpg";

function Home() {
  const handleresume = () => {
    window.open(
      "https://drive.google.com/file/d/1Bp8cQJs-Tootv-BHn82U2bfVkZSk8CgJ/view?usp=sharing",
    );
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                This is
                <strong id="user-detail-name" className="main-name">
                  {" "}
                  YUVRAJ JANGIR
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
