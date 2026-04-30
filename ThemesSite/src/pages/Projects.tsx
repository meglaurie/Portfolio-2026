import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import type { Project } from "../types/Project";
import Section from "../components/Section";
import SectionTitle from "../components/SectionHeader";
import CaseStudyTimeline from "../components/CaseStudyTimeline";
import projectsData from "../data/projects.json";

const projects = projectsData as Project[];

const Projects: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = useMemo(() => {
    return projects.find((p) => p.id === id) ?? null;
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
  ].filter(
    (url): url is string => typeof url === "string" && url.trim() !== ""
  );

  return (
    <Section title={"Case Study"}>
      <div className="project-container">
        <h1 id="project-title" className="project-title">
          {project.title}
        </h1>

        <CaseStudyTimeline />

        <div className="project-text-container">
          <SectionTitle title={"Project Background"} />
          <div
            id="background"
            dangerouslySetInnerHTML={{ __html: project.background }}
          />
          <hr />

          <SectionTitle title={"My Role"} />
          <div
            id="role"
            dangerouslySetInnerHTML={{ __html: project.role }}
          />
          <hr />

          <SectionTitle title={"Design Process"} />
          <div
            id="design"
            dangerouslySetInnerHTML={{ __html: project.design }}
          />
          <hr />

          <SectionTitle title={"Challenges and Solutions"} />
          <div
            id="challenges"
            dangerouslySetInnerHTML={{ __html: project.challenges }}
          />
          <hr />

          <SectionTitle title={"Outcomes and Impact"} />
          <div
            id="impact"
            dangerouslySetInnerHTML={{ __html: project.impact }}
          />

          <div className="images-container">
            {imageUrls.map((url, index) => (
              <div className="project-image-container" key={index}>
                <img
                  className="project-image"
                  src={url}
                  alt={`${project.id} - Image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;