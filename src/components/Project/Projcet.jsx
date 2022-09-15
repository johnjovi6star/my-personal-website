import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Project.css";
import project1 from "../../asset/images/project-1.jpg";
import project2 from "../../asset/images/project-5.jpg";
import project3 from "../../asset/images/project-3.jpg";

const Project = () => {
  return (
    <div className="project" id="project">
      <h2 className="mb-5">Project</h2>
      <Container>
        <Row>
          <Col md={4}>
            <Card style={{ width: "22rem" }} bg="dark">
              <Card.Img src={project1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="light">Demo</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="cards">
            <Card style={{ width: "22rem" }} bg="dark">
              <Card.Img src={project2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="light">Demo</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "22rem" }} bg="dark">
              <Card.Img src={project3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                <Button variant="light">Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
