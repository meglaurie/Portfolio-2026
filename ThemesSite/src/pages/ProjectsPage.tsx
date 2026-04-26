import Section from '../components/Section';
import ProjectList from '../components/ProjectList';
import LinkButton from '../components/LinkButton';
import type { Project } from '../types/Project';
import { useEffect, useState } from 'react';
// import '../styles/Page.css';

function ProjectsPage() {

const [projects, setProjects] = useState<Project[]>([]);
    
useEffect(() => {
fetch("../public/projects.json")
    .then((response) => response.json())
    .then((data) => setProjects(data));
}, []);

  return (
    <div className="projects-page-container">
        <Section title="PROJECTS">
            <ProjectList projects={projects} />
            {/* <LinkButton to="/projects" label="MORE" /> */}
        </Section>
    </div>
  );
}

export default ProjectsPage;