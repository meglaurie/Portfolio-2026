
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav-container'>
      <div>
        <Link to="/" >Label</Link>
        <Link to="/about">Label</Link>
        <Link to="/projects">Label</Link>
        <span>Label</span>
      </div>
    </nav>
  );
}

export default Nav;