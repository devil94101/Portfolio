import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import WatermelonPie from '../../Assets/Projects/watermelon-pie.png'
import BookMyShowHome from '../../Assets/Projects/bookMyShowClone.png'
import Purplle from '../../Assets/Projects/purplle.png'

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
              imgPath={WatermelonPie}
              isBlog={false}
              title="Watermelon Pie"
              description="Created a recipe website where user can search for recipes based on ingredients and can add their own recipes. This project is built using React.js and Nest js Backend. It has features like user authentication, adding recipes, and searching recipes based on ingredients and many more."
              ghLink=""
              demoLink="https://recipes.watermelonpie.com/login"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Purplle}
              isBlog={false}
              title="Purplle.com"
              description="Purplle is an online beauty and wellness destination that offers a wide range of products and services for both men and women. The website features a user-friendly interface that allows customers to browse and purchase products, as well as access information about beauty and wellness tips, tutorials, and more."
              ghLink=""
              demoLink="https://www.purplle.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookMyShowHome}
              isBlog={false}
              title="Book My show Clone"
              description="Book My Show Clone app built with React js, Firebase, node js and postgres Sql. This app is a clone of the popular movie ticket booking website, Book My Show. It allows users to browse movies, view showtimes, book tickets, and manage their bookings."
              ghLink="https://github.com/devil94101/bookmyshowclone"
              demoLink="https://bookmyshowclone.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
