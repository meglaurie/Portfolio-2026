import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import PageTransition from './components/PageTransition';
import Projects from './pages/Projects';
import ProjectsPage from './pages/ProjectsPage';
import Nav from './components/Nav';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects/" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="/projects/:id" element={<PageTransition><Projects /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Nav/>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;