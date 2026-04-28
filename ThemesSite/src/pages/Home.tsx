// import { useEffect, useState } from "react";
// import type { Project } from "../types/Project";
import Section from "../components/Section";
// import Button from "../components/Button";
// import ProjectList from "../components/ProjectList";


function Home() {
  // const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   fetch("../public/projects.json")
  //     .then((response) => response.json())
  //     .then((data) => setProjects(data));
  // }, []);

  return (
    <div className="home-container">
      <div className="home-grid">
        {/* Hero Section */}
        <Section title="Portfolio 2026">
          <h1 className="hero-title">Megan Laurie</h1>
          <p className="hero-subtitle">UX/UI Designer + Fontend Developer </p>
          <p className="hero-description">
            Bridging Design and Development with Precision and Passion. My unique ability to connect the creative with the technical ensures that every project not only looks great but functions flawlessly. I thrive on transforming user-centric designs into smooth, interactive, and accessible digital experiences that delight users and meet business goals.
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