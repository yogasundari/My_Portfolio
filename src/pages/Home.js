import React from "react";
import "./Home.css";
import profileImage from "./images/image.jpg"; // Replace with the actual path to your image file

const Home = () => {
  return (
    <div className="home-container">

      {/* Right section: Content and Image */}
      <div className="home-content-wrapper">
        <div className="home-content">
          <h1>Yogasundari T</h1>
          <p className="title">MERN Full Stack Developer | Java Developer</p>
          <p className="welcome-message">
            Welcome to my portfolio! Explore my skills, projects, and achievements.
          </p>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Yogasundari T" />
        </div>
      </div>
    </div>
  );
};

export default Home;
