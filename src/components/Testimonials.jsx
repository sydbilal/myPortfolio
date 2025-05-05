// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Testimonials.css"; // Import CSS

const testimonials = [
  {
    name: "Danish Ali",
    role: "CEO, Hjeen Foods",
    feedback:
      "Bilal is a brilliant developer. His attention to detail and ability to meet deadlines is exceptional.",
  },
  {
    name: "Mustafa Nadeem",
    role: "Software Architect Engineer, XREF",
    feedback:
      "Working with Bilal was a great experience. His expertise in React and backend technologies is top-notch.",
  },
  {
    name: "Ali Raza",
    role: "Founder, Startup Tech360",
    feedback:
      "Bilal delivered a high-quality product within the deadline. Highly recommended!",
  },
  {
    name: "Faheem",
    role: "Associate Software Engineer, Enterprise Cube",
    feedback:
      "He has exceptional coding and problem-solving skills. Highly recommended!",
  },
  {
    name: "Asad Ali",
    role: "Senior Software Engineer, Enterprise Cube",
    feedback:
      "He is great and fun to work with and for sure a quick learner",
  },
  {
    name: "Majez Chishti",
    role: "Project Manager, CafeBazaar",
    feedback:
      "Bilal's problem-solving skills, his coding ability, and handling tough deadlines makes him exeptional. Had fun working with him.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-container">
      <motion.h2
        className="testimonials-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Testimonials
      </motion.h2>
      <motion.div
        className="testimonials-grid"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {testimonials.map((review, index) => (
          <div key={index} className="testimonial-card">
            <h3 className="testimonial-name">{review.name}</h3>
            <p className="testimonial-role">{review.role}</p>
            <p className="testimonial-feedback">"{review.feedback}"</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
