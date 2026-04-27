import { Link } from 'react-router-dom';
import type { Project } from '../types/Project';
import LinkButton from './LinkButton';
import type { label } from 'framer-motion/client';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => (
  <div className="projects-grid">
    {projects.map((project) => (
      <div className='project-item-container' key={project.id}>
        <i className="fa-solid fa-folder-open project-folder fa-2xl"></i>
        <h3 className='project-title'>{project.title}</h3>
        <LinkButton to={`/projects/${project.id}`} label={'View'}></LinkButton>
      </div>
    ))}
  </div>
);

export default ProjectList;