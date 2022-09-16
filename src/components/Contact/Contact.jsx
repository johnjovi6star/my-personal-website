import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import contact from "../../asset/images/contact.png";

const Contact = () => {
  return (
    <div className="contact d-flex flex-column justify-content-center align-items-center" id="contact">
      <Container>
        <Row className="mobile-contact">
          <Col>
            <div>
              <img id="image-contact" src={contact} alt="" width="432px" />
            </div>
          </Col>
          <Col>
            <h2 className="mb-4 pb-2">Contact Me</h2>
            <form name="submit-to-google-sheet">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" aria-describedby="name" name="name" />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" aria-describedby="email" name="email" />
              </div>
              <div className="mb-3">
                <label for="message">Message</label>
                <textarea className="form-control" rows="3" name="message"></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Send
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
