import React, { useState } from "react";
import "./skills.css";
import programmingImg from './images/programming.jpg';
import webDevelopmentImg from './images/web-development.jpg';
import toolsImg from './images/tools.jpg';
import databaseImg from './images/database.jpg';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Data for skills and categories
  const skillsData = {
    Programming: ["Core Java", "Python", "C"],
    "Web Development": ["HTML", "CSS", "JavaScript", "ReactJS"],
    "Developer Tools": ["Eclipse", "Visual Studio Code", "STS", "Postman"],
    Database: ["SQL"],
  };

  // Replace with your actual image paths or URLs
  const categoryImages = {
    Programming: programmingImg, 
    "Web Development":webDevelopmentImg,
    "Developer Tools": toolsImg,
    Database:databaseImg,
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Go back to the categories list
  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="skills">
      <h2>Technical Skills</h2>
      {selectedCategory ? (
        // Detailed View for selected category
        <div className="details-view">
          <h3>{selectedCategory} Skills</h3>
          <ul className="details-list">
            {skillsData[selectedCategory].map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <button className="back-button" onClick={handleBackClick}>
            Back to Categories
          </button>
        </div>
      ) : (
        // Categories View with Background Images
        <ul className="categories-list">
          {Object.keys(skillsData).map((category, index) => (
            <li
              key={index}
              className="category-item"
              style={{
                backgroundImage: `url(${categoryImages[category]})`, // Set background image
              }}
              onClick={() => handleCategoryClick(category)}
            >
              <span className="category-title">{category}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Skills;
