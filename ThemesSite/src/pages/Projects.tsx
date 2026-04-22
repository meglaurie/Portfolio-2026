import { Link } from 'react-router-dom';
// import '../styles/Page.css';

function Projects() {
  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <p>This is your projects page content.</p>
      <Link to="/" className="btn btn-back">Back to Home</Link>
    </div>
  );
}

export default Projects;