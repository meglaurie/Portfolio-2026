
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";

function Nav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className='nav-container'>
      <div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Light" : "Dark"} Mode
        </button>
      </div>
      <div>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}

export default Nav;