import React from "react";
import Slider from "react-slick";
import { Progress, Card } from "antd";
import "../styles/Skills.css";
import {
  FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaCss3Alt, FaAws,
} from "react-icons/fa";
import { SiPostgresql, SiTailwindcss, SiNextdotjs, SiVercel, SiDotnet } from "react-icons/si";
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

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <Slider {...sliderSettings}>
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <Card className="skill-card-content" bordered={false}>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-circle">
                <Progress
                  type="circle"
                  percent={skill.level}
                  strokeColor={{
                    "0%": "#a3c4f3",
                    "100%": "#c3bce7",
                  }}
                  strokeWidth={10}
                  format={() => null}
                />
                <div className="skill-logo">{skill.icon}</div>
              </div>
              <p className="skill-description">{skill.description}</p>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
