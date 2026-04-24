import { Link } from 'react-router-dom';
import type { Project } from '../types/Project';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => (
  <ul className="projects-grid">
    {projects.map((project) => (
      <li key={project.id} className='project-item'>
        <i className="fa-solid fa-folder-open project-folder fa-2xl"></i>
        <Link to={`/projects/${project.id}`}>{project.title}</Link>
      </li>
    ))}
  </ul>
);

export default ProjectList;