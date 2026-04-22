
import { Link } from 'react-router-dom';
// import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <div>
        <Link to="/" >Label</Link>
        <Link to="/about">Label</Link>
        <Link to="/projects">Label</Link>
        <span>Label</span>
      </div>
    </nav>
  );
}

export default Navigation;