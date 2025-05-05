import React from "react";
import { motion } from "framer-motion";
import { Card, Avatar, Button } from "antd";
import { UserOutlined, DownloadOutlined } from "@ant-design/icons";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="about-card-wrapper"
      >
        <Card className="about-card" bordered={false}>
          <div className="about-header">
            <Avatar size={80} src="/myImage.jpeg" className="about-avatar" />
            <h2 className="about-title">About Me</h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="about-text"
          >
            Hi, I'm <strong>Bilal Nadeem</strong>, an experienced <strong>Full-Stack Developer </strong>with over <strong>four years </strong>of web development experience and one year of professional industry expertise. I specialize in building scalable, high-performance applications using modern technologies.  
            <p className="about-text">
            My core tech stack includes React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and Tailwind CSS, allowing me to craft seamless and efficient web experiences. I have expertise in API development, authentication systems, database management, payment integration, and server-side logic.
          </p>
          <p>Beyond the MERN stack, I have expanded my skills into .NET and ASP.NET, focusing on enterprise-level applications, microservices, and scalable APIs. I'm also well-versed in AWS and Vercel for cloud deployments.</p>
          <p className="about-text">
          With a problem-solving mindset and a passion for learning, I continuously explore new technologies and best coding practices to enhance performance, security, and user experience. Whether it's frontend design, backend architecture, or cloud infrastructure, I strive to deliver modern and innovative solutions.          </p>
          </motion.p>


          {/* Download Resume Button */}
          <div className="resume-btn-wrapper">
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              size="large"
              // href={resume} // Link to the imported resume
              download="/Bilal_Nadeem_Resume.pdf" // Set the downloaded file name
              className="resume-btn"
            >
              Download Resume
            </Button>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
