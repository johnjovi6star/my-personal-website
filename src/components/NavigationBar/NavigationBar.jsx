import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsJustify, BsReverseBackspaceReverse } from "react-icons/bs";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [barClicked, setBarClicked] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else setScrolled(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const showNavbar = () => {
    setBarClicked(true);
  };

  const closeNavbar = () => {
    setBarClicked(false);
  };

  return (
    <div>
      <Navbar variant="dark" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <h3 className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>
              Jovi<span className="text-warning">.</span>
            </h3>
          </Navbar.Brand>

          <Nav className={barClicked ? "active mobile-navbar" : "mobile-navbar"}>
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#skill" className={activeLink === "skill" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skill")}>
              Skill
            </Nav.Link>
            <Nav.Link href="#project" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("project")}>
              Project
            </Nav.Link>
            <Nav.Link href="#contact" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("contact")}>
              Contact
            </Nav.Link>
            <div id="quit">
              <BsReverseBackspaceReverse onClick={() => closeNavbar()} />
            </div>
          </Nav>
          <div id="mobile">
            <BsJustify onClick={() => showNavbar()} />
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
