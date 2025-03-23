import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "antd";
import "antd/dist/reset.css";
import { useNavigate } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({
      x: (clientX / window.innerWidth) * 100,
      y: (clientY / window.innerHeight) * 100,
    });
  };

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          // background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(0, 255, 255, 0.2), rgba(0, 0, 255, 0.1))`,
        }}
      >
        {/* Notification Badge */}
        
        <div className="hero-badge">
          Hello, I'm Bilal <span>👋</span>
        </div>

        <p className="hero-description">I build modern, scalable, fast and engaging web applications</p>



        <h1 className="hero-subtitle">
          Let’s take a look at my work first! <br /> Introduction Comes Later!
        </h1>


        {/* Buttons */}
        <div className="hero-buttons">
          <Button className="hero-btn solid-btn" onClick={scrollToProjects}>
            View Projects
          </Button>
          <Button className="hero-btn outlined-btn" onClick={() => navigate("/contact")}>
            Contact Me
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
