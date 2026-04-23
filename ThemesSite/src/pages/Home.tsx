import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import type { Project } from "../types/Project";
// import '../styles/Home.css';

function Home() {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch project data from the JSON file
    fetch("../public/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="home-container">
      <div className="decorative-stars">
        <span className="star star-1">⭐</span>
        <span className="star star-2">🌙</span>
        <span className="star star-3">⭐</span>
        <span className="star star-4">⭐</span>
      </div>

      <div className="home-grid">
        {/* Hero Section */}
        <div className="hero-section">
          <div className='window-bar'></div>
          <h1 className="hero-title">TEXT</h1>
          <p className="hero-subtitle">MORE TEST</p>
          <p className="hero-description">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA, UT ENIM AD MINIM VENIAM.
          </p>
          <div className="social-icons">
            <a href="#" className="icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-1.02-2.44g-7.12c-1.29-1.29-3.29-1.29-4.58 0" />
              </svg>
            </a>
            <a href="#" className="icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1" />
                <path d="M12 1v6m0 6v6" />
              </svg>
            </a>
            <a href="#" className="icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 6l10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects-section">
          <h2 className="section-title">PROJECTS</h2>
          <div className="projects-grid">
          {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </li>
        ))}
          </div>
          <Link to="/projects" className="btn btn-more">MORE</Link>
        </div>

        {/* About Section */}
        <div className="about-section">
          <div className="about-cat">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%234A90E2' width='100' height='100'/%3E%3Ccircle cx='35' cy='30' r='20' fill='%23000'/%3E%3Ccircle cx='65' cy='30' r='20' fill='%23000'/%3E%3Ccircle cx='25' cy='25' r='6' fill='%23fff'/%3E%3Ccircle cx='75' cy='25' r='6' fill='%23fff'/%3E%3Ccircle cx='50' cy='60' r='8' fill='%23fff'/%3E%3C/svg%3E" alt="Cat" className="cat-image" />
            <button className="btn btn-play">PLAY!</button>
          </div>
          <div className="about-content">
            <h2 className="section-title">ABOUT</h2>
            <div className="about-circle" />
            <p className="about-description">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA, UT ENIM AD MINIM VENIAM.
            </p>
            <Link to="/about" className="btn btn-more">MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;