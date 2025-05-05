import React from "react";
import Slider from "react-slick";
import "../styles/Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Web Optim",
    description: "A Web optimization and SEO improvement platform powered by AI.",
    techStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "OPENAI API"],
    image: "/weboptim.png",
    link: "https://hotel-management-system-c8ov.vercel.app/",
  },
  {
    title: "Hjeen Foods",
    description: "Coffee e-commerce website with admin dashboard, dual language, and payments.",
    techStack: ["React", "Redux", "Express.js", "Node.js", "PostgreSQL", "Stripe API"],
    image: "/hjeenfoods.png",
    link: "https://shop.hjeen.com/",
  },
  {
    title: "Salesperson App",
    description: "Vendor tool for managing sales, shopkeeper contacts, and order tracking.",
    techStack: ["React", "Redux", "TailwindCSS", "Express.js", "Node.js", "MongoDB"],
    image: "/salespersonapp.png",
    link: "https://github.com/sydbilal/vender-app",
  },
  {
    title: "Hotel Management System",
    description: "Hotel booking with admin panel, room pricing and Stripe integration.",
    techStack: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS", "Stripe API"],
    image: "/hotelbookingapp.png",
    link: "https://hotel-management-system-c8ov.vercel.app/",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "80px",
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section id="projects" className="projects-carousel-section">
      <Slider {...settings} className="project-slider">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <ul className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="tech-item">{tech}</li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
