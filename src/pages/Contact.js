import React, { useState } from "react";
import "./contact.css"; // Import the styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="contact">
      <h2 className="contact-title">Contact Me</h2>

      {/* Contact Information Section */}
      <div className="contact-details">
        <p className="contact-item">
          <strong>Email:</strong>{" "}
          <span className="contact-info">yogayazhini07@gmail.com</span>
        </p>
        <p className="contact-item">
          <strong>Phone:</strong>{" "}
          <span className="contact-info">+91 9025420521</span>
        </p>
        <p className="contact-item">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/yogasundari-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </p>
        <p className="contact-item">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/yogasundari"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub Profile
          </a>
        </p>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <p>Follow me on:</p>
        <a
          href="https://www.instagram.com/yazhini_tamilanban/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          Instagram
        </a>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Physical Location */}
      <div className="location">
        <h3>My Location</h3>
        <p>Tambaram, Chennai, India</p>
      </div>
    </div>
  );
};

export default Contact;
