
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav-container'>
      <div>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <span>Label</span>
      </div>
    </nav>
  );
}

export default Nav;