import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

const App = () => {
  useEffect(() => {
    const backToTop = document.getElementById("backToTop");

    // Show or hide the "Back to Top" button on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    // Smooth scroll to the top
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", () => {});
      backToTop.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <Router>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Back to Top Button */}
      <button
        id="backToTop"
        style={{
          display: "none",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#4b2e83",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Top
      </button>
    </Router>
  );
};

export default App;
