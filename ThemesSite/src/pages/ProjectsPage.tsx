import Section from '../components/Section';
import ProjectList from '../components/ProjectList';
import Button from '../components/Button';
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
    <Section title="PROJECTS">
        <ProjectList projects={projects} />
        <Button to="/projects" label="MORE" />
    </Section>
  );
}

export default ProjectsPage;