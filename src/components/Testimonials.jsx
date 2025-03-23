// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Testimonials.css"; // Import CSS

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Tech Corp",
    feedback:
      "Mustafa is a brilliant developer! His attention to detail and ability to meet deadlines is exceptional.",
    avatar: "/images/john.jpg",
  },
  {
    name: "Sarah Khan",
    role: "Project Manager, Web Solutions",
    feedback:
      "Working with Mustafa was a great experience. His expertise in React and backend technologies is top-notch!",
    avatar: "/images/sarah.jpg",
  },
  {
    name: "Ali Raza",
    role: "Founder, Startup XYZ",
    feedback:
      "Mustafa delivered a high-quality product within the deadline. Highly recommended!",
    avatar: "/images/ali.jpg",
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
            <img src={review.avatar} alt={review.name} className="testimonial-avatar" />
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
