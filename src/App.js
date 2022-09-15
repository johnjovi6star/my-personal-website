import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Projcet";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Home />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
