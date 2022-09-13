import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Skill.css";
import html from "../../asset/images/html.png";
import css from "../../asset/images/css.png";
import js from "../../asset/images/js.png";
import react from "../../asset/images/react.png";

const Skill = () => {
  return (
    <div className="skill">
      <div className="box" id="skill">
        <h2 className="mb-5">Skill</h2>
        <Container>
          <Row>
            <Col>
              <div className="skill-image">
                <img src={html} alt="html" width="300px" />
                <img src={css} alt="html" width="200px" />
                <img src={js} alt="html" width="300px" />
                <img src={react} alt="html" width="402px" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skill;
