// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import toast from "react-hot-toast"; // ✅ Import toast

import "../styles/Contact.css";

const Contact = () => {
  const formRef = useRef(); // ✅ Reference to the form
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_y6eorrb",      // 🔁 Replace with your EmailJS service ID
        "template_1rgtwbr",     // 🔁 Replace with your template ID
        formRef.current,
        "2lbMPNIerDUS_Z82n"       // 🔁 Replace with your public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!"); // ✅ Show success toast
  setFormData({ name: "", email: "", message: "" }); // ✅ Clear form
  setIsSending(false);
        },
        (error) => {
          toast.error("Something went wrong. Please try again."); // ✅ Show error toast
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-container">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Leave me a message
      </motion.h2>
      <motion.form
        ref={formRef} // ✅ Attach ref to the form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-button" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
