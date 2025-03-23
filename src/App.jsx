// src/App.jsx
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


const App = () => {
  return (
<div>
    <Navbar />
    <Hero />
    <Projects />
    <About />
    <Experience />
    <Skills />

    <Testimonials />
    <Contact />
    </div>
  );
};

export default App;
