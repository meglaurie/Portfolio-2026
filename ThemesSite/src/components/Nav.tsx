
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";

function Nav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className='nav-container'>
      <div className='nav-section-right'>
        
      </div>
      <div className='nav-section-left'>
        <Link className='nav-link' to="/" >Home</Link>
        <Link className='nav-link' to="/projects">Projects</Link>
        <Link className='nav-link' to="/about">About</Link>
        <div className='nav-link' onClick={toggleTheme}> {theme === "light" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</div>
      </div>
    </nav>
  );
}

export default Nav;