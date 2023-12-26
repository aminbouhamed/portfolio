import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import rvm from "../../Assets/Projects/5.png";
import chatbot from "../../Assets/Projects/chatbot.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Conceptual graph-based Recommendation System for PRM issue"
              description="development of a groundbreaking knowledge graph and chatbot for Project Risk Management
              (PRM), revolutionizing the way organizations approach risk assessmen"
              ghLink="https://github.com/aminbouhamed/Conceptual-graph-based-Recommendation-System-for-PRM-issue"
              demoLink="https://drive.google.com/file/d/1BnmItiq-Hq9LM28TNg0GPEjoDYFEtpEi/view?usp=sharing" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rvm}
              isBlog={false}
              title="Reverse Vending Machine"
              description="Built a Prototype of cans and bottles sorter using computer vison pretrained model with tensorflow linked with a mobile application contain a gammification system"
              ghLink="https://github.com/aminbouhamed/RVM-GUI"
              demoLink="https://drive.google.com/file/d/1SouWKc7Laf2fPTvktSnGw_zDsfEnzaCA/view?usp=sharing" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/aminbouhamed/facial_emotion_detection"
               
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
