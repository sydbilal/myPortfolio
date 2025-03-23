import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css"; // Import custom styles

// Import images properly
import healthDashboardImg from "../assets/hjeenfoods.png";
import botatixAiImg from "../assets/salespersonapp.png";
import medicalRecordsImg from "../assets/hotelbookingapp.png";

const projects = [
  {
    title: "Hjeen Foods",
    description: "A highly responsive and user-friendly coffee e-commerce website for Saudi Arabia. Featuring dual-language support, authentication, authorization, and seamless payment integration with Admin Dashboard management.",
    techStack: ["React", "Redux", "Express.js", "Node.js", "PostgreSQL", "Stripe API"],
    image: healthDashboardImg,
    link: "https://shop.hjeen.com/",
  },
  {
    title: "Salesperson App",
    description: "A powerful app for vendors to collect orders from shopkeepers effortlessly. Enables vendors to manage goods, track sales, contact shopkeepers, and streamline order processing for an efficient business workflow with Admin Dashboard Management.",
    techStack: ["React", "Redux", "TailwindCSS", "Express.js", "Node.js", "MongoDB" ],
    image: botatixAiImg,
    link: "https://github.com/sydbilal/vender-app",
  },
  {
    title: "Hotel Management System",
    description: "A hotel booking and management system that lets users search, book, and manage hotel stays with online payment integration. It features an admin panel for hotel owners to manage room availability, pricing, and reservations efficiently.",
    techStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe API"],
    image: medicalRecordsImg,
    link: "https://hotel-management-system-c8ov.vercel.app/",
  }
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="project-card-content">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            
            {/* Tech Stack Section */}
            <ul className="tech-stack">
              {project.techStack.map((tech, i) => (
                <li key={i} className="tech-item">{tech}</li>
              ))}
            </ul>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
              View Project
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
