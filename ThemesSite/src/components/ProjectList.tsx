import type { Project } from '../types/Project';
import LinkButton from './LinkButton';
import PlaceholderThumbnail from './PlaceholderThumbnail.tsx';

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
        <PlaceholderThumbnail />
        {/* <img src={project.thumbnail ? project.thumbnail : PinkBackground} alt={`${project.title} thumbnail`} className="project-thumbnail" /> */}
        <h4 className='project-title'>
          {project.title ? truncateText(project.title, 32) : "Untitled"}
        </h4>
        <LinkButton to={`/projects/${project.id}`} label={'View'}></LinkButton>
      </div>
    ))}
  </div>
);

export default ProjectList;