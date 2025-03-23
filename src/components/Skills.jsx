import React from "react";
import { motion } from "framer-motion";
import { Progress, Card } from "antd"; // Import Ant Design Components
import "../styles/Skills.css"; // Import CSS

// Import icons from react-icons
import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaCss3Alt, FaAws,
} from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiNextdotjs, SiVercel,  SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skillsData = [
  { name: "JavaScript", level: 90, icon: <FaJs className="skill-icon" />, description: "Dynamic & versatile scripting" },
  { name: "C#", level: 85, icon: <TbBrandCSharp className="skill-icon" />, description: "Object-oriented programming" },
  { name: "Python", level: 90, icon: <FaPython className="skill-icon" />, description: "AI & data processing" },

  { name: "React.js", level: 85, icon: <FaReact className="skill-icon" />, description: "Efficient UI development" },
  { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="skill-icon" />, description: "Utility-first styling" },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="skill-icon" />, description: "Styling & animations" },

  { name: "Node.js", level: 80, icon: <FaNodeJs className="skill-icon" />, description: "Backend & API development" },
  { name: ".NET", level: 85, icon: <SiDotnet className="skill-icon" />, description: "Robust enterprise solutions" },

  { name: "Next.js", level: 85, icon: <SiNextdotjs className="skill-icon" />, description: "SSR & full-stack development" },

  { name: "MongoDB", level: 75, icon: <FaDatabase className="skill-icon" />, description: "NoSQL database expertise" },
  { name: "PostgreSQL", level: 80, icon: <SiPostgresql className="skill-icon" />, description: "Advanced SQL database" },

  { name: "Vercel", level: 80, icon: <SiVercel className="skill-icon" />, description: "Effortless deployment" },
  { name: "AWS", level: 75, icon: <FaAws className="skill-icon" />, description: "Cloud computing solutions" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }} // Staggered effect
          >
            <Card className="skill-card-content" bordered={false}>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-circle">
                <Progress
                  type="circle"
                  percent={skill.level}
                  strokeColor={{
                    "0%": "#00aaff",
                    "100%": "#0066ff",
                  }}
                  strokeWidth={10}
                  format={() => null} // Remove default text inside
                />
                <div className="skill-logo">{skill.icon}</div> {/* Logo inside the circle */}
              </div>
              <p className="skill-description">{skill.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
