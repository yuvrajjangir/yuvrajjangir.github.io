import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view" id="user-detail-intro">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yuvraj Jangir </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I'm passionate <span className="purple">Full-stack web developer</span>, proudly equipped with a comprehensive skill set from <span className="purple">Masai School's</span> intensive full-stack web development course. In addition, I hold a <span className="purple">Bachelor Degree in Commerce</span> from Chirawa College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
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
  );
}

export default AboutCard;
