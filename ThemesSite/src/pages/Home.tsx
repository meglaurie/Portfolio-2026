import { useEffect, useState } from "react";
import type { Project } from "../types/Project";
import Section from "../components/Section";
import Button from "../components/Button";
import ProjectList from "../components/ProjectList";

function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("../public/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="home-container">
      <div className="home-grid">
        {/* Hero Section */}
        <Section title="HERO">
          <h1 className="hero-title">Megan Laurie</h1>
          <p className="hero-subtitle">UX/UI Designer + Fontend Developer </p>
          <p className="hero-description">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA, UT ENIM AD MINIM VENIAM.
          </p>
          <div className="social-icons">
          <i className="fa-brands fa-linkedin fa-2xl"></i>
          <i className="fa-brands fa-github-alt fa-2xl"></i>
          <i className="fa-solid fa-envelope fa-2xl"></i>
          </div>
        </Section>

        {/* <Section title="PROJECTS">
          <ProjectList projects={projects} />
          <Button to="/projects" label="MORE" />
        </Section>

        <Section title="ABOUT">
          <Button to="/about" label="ABOUT ME" />
        </Section> */}
      </div>
    </div>
  );
}

export default Home;