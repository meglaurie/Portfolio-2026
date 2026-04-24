import { Link } from 'react-router-dom';
import type { Project } from '../types/Project';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => (
  <ul className="projects-grid">
    {projects.map((project) => (
      <li key={project.id}>
        <Link to={`/projects/${project.id}`}>{project.title}</Link>
      </li>
    ))}
  </ul>
);

export default ProjectList;