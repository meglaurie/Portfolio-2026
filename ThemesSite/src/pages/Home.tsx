import { useEffect, useState } from "react";
import type { Project } from "../types/Project";
import SocialIcon from "../components/SocialIcon";
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
          <h1 className="hero-title">TEXT</h1>
          <p className="hero-subtitle">MORE TEST</p>
          <p className="hero-description">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA, UT ENIM AD MINIM VENIAM.
          </p>
          <div className="social-icons">
            <SocialIcon href="#" icon={['fab', 'github-alt']} />
            <SocialIcon href="#" icon={['fab', 'twitter']} />
            <SocialIcon href="#" icon={['fab', 'linkedin']} />
          </div>
          </Section>

        {/* Projects Section */}
        <Section title="PROJECTS">
          <ProjectList projects={projects} />
          <Button to="/projects" label="MORE" />
        </Section>

        {/* About Section */}
        <Section title="ABOUT">
          <Button to="/about" label="ABOUT ME" />
        </Section>
      </div>
    </div>
  );
}

export default Home;