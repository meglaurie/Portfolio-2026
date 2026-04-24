import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../types/Project";
import Section from "../components/Section";

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
    <Section title={null}>
    <h2>{project.title}</h2>
    <p>{project.background}</p>
    <p>{project.role}</p>
    <p>{project.design}</p>
    <p>{project.challenges}</p>
    <p>{project.impact}</p>
    <div className="images-container">
      {imageUrls
        .filter((url) => url && url.trim() !== null) // Filter out empty strings
        .map((url, index) => (
          <img key={index} src={url} alt={`${project.id} - Image ${index + 1}`} />
        ))}
    </div>
  </Section>
  );
};

export default Projects;