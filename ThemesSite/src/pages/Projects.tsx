import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../types/Project";
import Section from "../components/Section";
import SectionTitle from "../components/SectionHeader";
import CaseStudyTimeline from "../components/CaseStudyTimeline";

const Projects: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    // Fetch project data from the JSON file
    fetch("../public/projects.json")
      .then((response) => response.json())
      .then((data: Project[]) => {
        const selectedProject = data.find((project) => project.id === id);
        setProject(selectedProject || null);
      });
  }, [id]);

  if (!project) {
    return <div>Project not found</div>;
  }

  const imageUrls = [
    project.imageUrl1,
    project.imageUrl2,
    project.imageUrl3,
    project.imageUrl4,
    project.imageUrl5,
    project.imageUrl6,
  ];

  return (
    <>
      <Section title={null} >
        <div className="project-container">
            <h1 id="project-title" className="project-title">{project.title}</h1>
            <CaseStudyTimeline/>
            <SectionTitle title = {'Project Background'}></SectionTitle>
            <p id="background">{project.background}</p>
            <SectionTitle title = {'My Role'}></SectionTitle>
            <p id="role">{project.role}</p>
            <SectionTitle title = {'Design Process'}></SectionTitle>
            <p id="design">{project.design}</p>
            <SectionTitle title = {'Challenges and Solutions'}></SectionTitle>
            <p id="challenges">{project.challenges}</p>
            <SectionTitle title = {'Outcomes and Impact'}></SectionTitle>
            <p id="impact">{project.impact}</p>
            <div className="images-container">
              {imageUrls
                .filter((url) => url && url.trim() !== null) // Filter out empty strings
                .map((url, index) => (
                  <img key={index} src={url} alt={`${project.id} - Image ${index + 1}`} />
                ))}
            </div>
        </div>
    </Section>
  </>
  );
};

export default Projects;