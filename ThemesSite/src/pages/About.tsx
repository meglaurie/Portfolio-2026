import { Link } from 'react-router-dom';
// import '../styles/Page.css';

function About() {
  return (
    <div className="page-container">
      <h1>About Me</h1>
      <p>This is your about page content.</p>
      <Link to="/" className="btn btn-back">Back to Home</Link>
    </div>
  );
}

export default About;