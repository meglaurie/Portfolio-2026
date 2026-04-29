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
            <div className="project-text-container">
              <SectionTitle title = {'Project Background'}></SectionTitle>
              <div id="background" dangerouslySetInnerHTML={{ __html: project?.background || "" }} />
              <hr/>
              <SectionTitle title = {'My Role'}></SectionTitle>
              <div id="role" dangerouslySetInnerHTML={{ __html: project?.role || "" }} />
              <hr />
              <SectionTitle title = {'Design Process'}></SectionTitle>
              <div id="design" dangerouslySetInnerHTML={{ __html: project?.design || "" }} />
              <hr />
              <SectionTitle title = {'Challenges and Solutions'}></SectionTitle>
              <div id="challenges" dangerouslySetInnerHTML={{ __html: project?.challenges || "" }} />
              <hr />
              <SectionTitle title = {'Outcomes and Impact'}></SectionTitle>
              <div id="impact" dangerouslySetInnerHTML={{ __html: project?.impact || "" }} />
              <div className="images-container">
                {imageUrls
                  .filter((url) => url && url.trim() !== null) // Filter out empty strings
                  .map((url, index) => (
                    <div className="project-image-container" key={index}>
                      <img className="project-image" key={index} src={url} alt={`${project.id} - Image ${index + 1}`} />
                    </div>     
                  ))}
              </div>
            </div>
        </div>
    </Section>
  </>
  );
};

export default Projects;