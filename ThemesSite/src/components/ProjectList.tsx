import type { Project } from '../types/Project';
import LinkButton from './LinkButton';
import PinkBackground from '../assets/imgs/Pink-Background.png';

interface ProjectListProps {
  projects: Project[];
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...'; // Truncate and add ellipsis
  }
  return text; // Return original text if within the limit
};

const ProjectList = ({ projects }: ProjectListProps) => (
  
  
  <div className="projects-grid">
    {projects.map((project) => (
      <div className="project-item-container" key={project.id}>
        <img src={PinkBackground} alt={`${project.title} thumbnail`} className="project-thumbnail" />
        {/* <i className="fa-solid fa-folder-open project-folder fa-2xl"></i> */}
        <h3 className='project-title'>
          {truncateText(project.title, 32)} {/* Limit to 30 characters */}
        </h3>
        <LinkButton to={`/projects/${project.id}`} label={'View'}></LinkButton>
      </div>
    ))}
  </div>
);

export default ProjectList;