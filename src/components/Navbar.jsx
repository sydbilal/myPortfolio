import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { Link as ScrollLink } from "react-scroll";
import { MenuOutlined } from "@ant-design/icons";
import "../styles/Navbar.css";
import profilePic from "../assets/myImage.jpeg";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Left Side: Logo & Name */}
        <div className="brand">
          <img src={profilePic} alt="Profile" />
          <h1>Syed Bilal</h1>
        </div>

        {/* Center: Desktop Navigation Menu */}
        <div className="desktop-menu">
          <Menu mode="horizontal" className="nav-links">
            <Menu.Item key="1">
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                className="nav-link"
              >
                Projects
              </ScrollLink>
            </Menu.Item>
            <Menu.Item key="2">
              <ScrollLink to="about" smooth duration={500} className="nav-link">
                About
              </ScrollLink>
            </Menu.Item>
            <Menu.Item key="3">
              <ScrollLink
                to="experience"
                smooth
                duration={500}
                className="nav-link"
              >
                Experience
              </ScrollLink>
            </Menu.Item>
            <Menu.Item key="4">
              <ScrollLink
                to="skills"
                smooth
                duration={500}
                className="nav-link"
              >
                Skills
              </ScrollLink>
            </Menu.Item>

            <Menu.Item key="5">
              <ScrollLink
                to="testimonials"
                smooth
                duration={500}
                className="nav-link"
              >
                Reviews
              </ScrollLink>
            </Menu.Item>
          </Menu>
        </div>

        {/* Right Side: Contact Button (Desktop) */}
        <div className="contact-btn-wrapper">
          <ScrollLink to="contact" smooth duration={500}>
            <Button type="primary" className="contact-button">
              Contact
            </Button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Icon */}
        <MenuOutlined className="menu-icon" onClick={showDrawer} />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <Menu mode="vertical" className="drawer-menu" onClick={closeDrawer}>
        <Menu.Item key="1">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              className="nav-link"
            >
              Projects
            </ScrollLink>
          </Menu.Item>
          <Menu.Item key="2">
            <ScrollLink to="about" smooth duration={500} className="nav-link">
              About
            </ScrollLink>
          </Menu.Item>
          <Menu.Item key="3">
            <ScrollLink
              to="experience"
              smooth
              duration={500}
              className="nav-link"
            >
              Experience
            </ScrollLink>
          </Menu.Item>
          <Menu.Item key="4">
            <ScrollLink to="skills" smooth duration={500} className="nav-link">
              Skills
            </ScrollLink>
          </Menu.Item>
          
          <Menu.Item key="6">
            <ScrollLink
              to="testimonials"
              smooth
              duration={500}
              className="nav-link"
            >
              Reviews
            </ScrollLink>
          </Menu.Item>
          <Menu.Item key="7">
            <ScrollLink to="contact" smooth duration={500}>
              <Button type="primary" className="contact-button">
                Contact
              </Button>
            </ScrollLink>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
