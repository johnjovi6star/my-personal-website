import React from "react";
import { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./Skill.css";
import html from "../../asset/images/html.png";
import css from "../../asset/images/css.png";
import js from "../../asset/images/js.png";
import react from "../../asset/images/react.png";

const Skill = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="skill">
      <div className="box">
        <h2 className="mb-4">Skill</h2>
        <Container>
          <Row>
            <Col>
              <Carousel activeIndex={index} onSelect={handleSelect} className="text-center">
                <Carousel.Item interval={2000}>
                  <img src={html} className="pb-5 mb-3" alt="HTML 5" width="300px" />
                  <Carousel.Caption>HTML 5</Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img src={css} className="pb-5 mb-3" alt="CSS" width="157px" />
                  <Carousel.Caption>CSS 3</Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img src={js} className="pb-5 mb-3" alt="Javascript" width="280px" />
                  <Carousel.Caption>Javascript</Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img src={react} className="pb-5 mb-3" alt="ReactJS" width="381px" />
                  <Carousel.Caption>React JS</Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skill;
