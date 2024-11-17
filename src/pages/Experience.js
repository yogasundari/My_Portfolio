import React from "react";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Technical Trainer",
      company: "Saveetha Engineering College, Chennai",
      duration: "March/2024 – sepetember/2024",
      responsibilities: [
        "Conduct engaging sessions on Problem Solving, Python Programming, and Fundamentals of C for engineering students.",
        "Develop and deliver well-structured lesson plans to improve students' technical skills and critical thinking.",
        "Mentor students in coding best practices, algorithm design, and debugging techniques.",
        "Design practical exercises and coding challenges to reinforce programming concepts.",
        "Collaborate with faculty to align curriculum with industry trends and student learning outcomes.",
      ],
    },
  ];

  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3 className="role">{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <ul className="responsibilities">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
