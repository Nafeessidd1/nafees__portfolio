import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ballot.png";
import emotion from "../../Assets/Projects/multi.png";
import editor from "../../Assets/Projects/smart.png";
import chatify from "../../Assets/Projects/forgery.png";
import suicide from "../../Assets/Projects/pong.png";
import bitsOfCode from "../../Assets/Projects/chat.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Image Forgery Detection"
              description="Developed an Image Forgery Detection system using a CNN model trained on the CASIA2 dataset. The Flask-based web app allows users to upload images for real-time authenticity checks, leveraging OpenCV, TensorFlow, and Streamlit to detect tampering. Integrated an intuitive frontend with HTML, CSS, and JavaScript."
              ghLink="https://github.com/Nafeessidd1/Image_forgery_detection"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Let's Chat"
              description="
Built a real-time chat application using React, HTML, CSS, and JavaScript, with Firebase for backend services like authentication and data storage. The app supports instant messaging, user authentication, and real-time updates, providing a seamless and responsive chat experience."
              ghLink="https://github.com/Nafeessidd1/Chat-App"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SecurifyAi"
              description="Developed a Smart Surveillance System using YOLO v7 for real-time monitoring of camera feeds. The system detects unauthorized entries, identifies abandoned objects, and recognizes actions like fighting or vandalism. Integrated Firebase for face recognition, with automatic alerts and photo logging to enhance security. Built using Python, OpenCV, and PyTorch."
              ghLink="https://github.com/Nafeessidd1/SecurifyAI"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="BallotNest"
              description="Built a Django-based e-voting system, BallotNest, designed for organizations to streamline elections. Features include secure OTP verification, admin management of candidates and voters, real-time vote tallying with charts, and automated result display. Uses an intuitive AdminLTE interface for a seamless voting experience."
              ghLink="https://github.com/Nafeessidd1/BallotNest"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Pong Game"
              description="Developed a gesture-controlled Pong game using Python, OpenCV, and CVZone for real-time hand detection. Players control the paddle with hand gestures to compete against an AI opponent. Features include an intuitive UI, adjustable difficulty levels, and smooth gesture tracking for an immersive experience."
              ghLink="https://github.com/Nafeessidd1/Pong-game-using-hand-gesture"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Multiple Disease Prediction"
              description="Developed a disease prediction system using machine learning models to predict diabetes, heart disease, and kidney disease. Integrated into a Streamlit web app, allowing users to input health parameters for predictions. Features include user-friendly interfaces and real-time disease risk assessments for better health insights."
              ghLink="https://github.com/Nafeessidd1/-Multiple-disease-prediction"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
