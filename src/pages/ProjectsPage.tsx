import Section from "../components/Section";
import ProjectList from "../components/ProjectList";
import type { Project } from "../types/Project";
import projectsData from "../data/projects.json";

const projects = projectsData as Project[];

function ProjectsPage() {
  return (
    <div className="section-container">
      <Section title="PROJECTS">
        <ProjectList projects={projects} />
      </Section>
    </div>
  );
}

export default ProjectsPage;