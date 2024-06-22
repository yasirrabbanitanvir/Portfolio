import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default App;
