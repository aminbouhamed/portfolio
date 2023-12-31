import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amin Bouhamed </span>
            from <span className="purple"> Sfax, Tunisia.</span>
            <br /> I am a final year student pursuing a degree in Software Engineering with a specialization in Data Science & AI at Higher School of Engineering and Technologies of Tunis,Involved in an Exchange program at Hochschule Schmalkalden university of applied science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling and camping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amin bouhamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
