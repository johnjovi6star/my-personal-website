import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import "./Home.css";
import Image2 from "../../asset/images/img.png";

const Home = () => {
  const [time, setTime] = useState(250 - Math.random() * 100);
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Jovi", "Web Developer", "Informatics Student"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, time);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTime((prevTime) => prevTime / 1.7);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setTime(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setTime(500);
    } else {
      setIndex((prevIndex) => prevIndex + index);
    }
  };

  return (
    <div className="home" id="home">
      <Container>
        <Row className="mobile-row">
          <Col>
            <div className="mobile-box">
              <div className="welcome">Welcome To My Portfolio</div>
              <h2>I am {text}</h2>
              <p>A person who is really passionate about science and technology</p>
              <Button variant="dark">Download CV</Button>
              <div className="my-3 mx-1">
                <a href="#ig">
                  <BsLinkedin />
                </a>
                <a href="#ig" className="m-2">
                  <BsGithub />
                </a>
                <a href="#ig" id="skill">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <img className="img" src={Image2} alt="Image2" width="400px" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
