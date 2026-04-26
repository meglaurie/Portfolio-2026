// import { useEffect, useState } from "react";
// import type { Project } from "../types/Project";
import Section from "../components/Section";
// import Button from "../components/Button";
// import ProjectList from "../components/ProjectList";
import starSvg from '../assets/imgs/Star.svg';
import moonSvg from '../assets/imgs/moon.svg';
import flatCloudSvg from '../assets/imgs/FlatCloud.svg';
import roundCloudSvg from '../assets/imgs/RoundCloud.svg';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { theme } = useTheme();
  // const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   fetch("../public/projects.json")
  //     .then((response) => response.json())
  //     .then((data) => setProjects(data));
  // }, []);

  return (
    <div className="home-container">
      <div className="home-grid">
      <div className="decorative-stars">
      {theme === "dark" ? (
        <>
          <img src={starSvg} alt="" className="star star-1"/>
          <img src={moonSvg} alt="" className="star star-2"/>
          <img src={starSvg} alt="" className="star star-3"/>
          <img src={starSvg} alt="" className="star star-4"/>
          <img src={starSvg} alt="" className="star star-5"/>
          <img src={starSvg} alt="" className="star star-6"/>
          <img src={starSvg} alt="" className="star star-7"/>
        </>
      ) : (
        <>
          <img src={flatCloudSvg} alt="" className="star star-1"/>
          <img src={roundCloudSvg} alt="" className="star star-2"/>
          <img src={flatCloudSvg} alt="" className="star star-3"/>
          <img src={roundCloudSvg} alt="" className="star star-4"/>
          <img src={flatCloudSvg} alt="" className="star star-5"/>
          <img src={roundCloudSvg} alt="" className="star star-6"/>
          <img src={flatCloudSvg} alt="" className="star star-7"/>
        </>
      )}
      </div>
        {/* Hero Section */}
        <Section title="HERO">
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