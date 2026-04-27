
// import { Link } from 'react-router-dom';
// import { useTheme } from "../context/ThemeContext";

// function Nav() {
//   const { theme, toggleTheme } = useTheme();
//   return (
//     <nav className='nav-container'>
//       <div className='nav-section-right'>
        
//       </div>
//       <div className='nav-section-left'>
//         <Link className='nav-link' to="/" >Home</Link>
//         <Link className='nav-link' to="/projects">Projects</Link>
//         <Link className='nav-link' to="/about">About</Link>
//         <div className='nav-link' onClick={toggleTheme}> {theme === "light" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}</div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // Prevent scrolling when the menu is open
  }, [isOpen]);

  return (
    <>
     {/* Overlay */}
     {isOpen && (
        <div className="menu-overlay" onClick={() => setIsOpen(false)} />
      )}
      <nav className="nav-container">
        <div className="nav-section-container">
          <div className="nav-section-right">
            {/* Hamburger */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="nav-section-left desktop-menu">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/about">About</Link>
            <div className="nav-link" onClick={toggleTheme}>
              {theme === "light" ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {/* Close Button */}
          <div className="close-btn" onClick={() => setIsOpen(false)}>×</div>

          {/* Menu links */}
          <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/projects">Projects</Link>
          <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;