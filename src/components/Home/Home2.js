import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a dedicated and hardworking individual, I am always seeking new challenges that enable me to utilize my skills and knowledge. With a passion for Artificial Intelligence,<br/> i take pride in my ability to achieve tasks and overcome difficulties in both individual and collaborative environments, I am committed to staying up-to-date with the latest technologies and methodologies, and am constantly looking for opportunities to expand my skill set and stay at the forefront of the industry.

              
             <vr/> My field of Interest's is building new &nbsp;
              <i>
                <b className="purple">Useful AI solutions </b> 
              </i>
              <br />
              
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Modern Python Frameworks</b>
              
              &nbsp; like
              <i>
                <b className="purple"> Django and FastAPI</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aminbouhamed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amin-bouhamed/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:amin.bouhamed@esprit.tn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
