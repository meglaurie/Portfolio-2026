
import { Link } from 'react-router-dom';
import { useTheme } from "../context/ThemeContext";
import Button from './Button';

function Nav() {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className='nav-container flex-container'>
      <div className='section-right'>
        <Button OnClick={toggleTheme} label={`${theme === "light" ? "Light" : "Dark"} Mode`} />
      </div>
      <div className='section-left'>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}

export default Nav;