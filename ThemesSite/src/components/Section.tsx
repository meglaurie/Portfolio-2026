import { Link } from "react-router-dom";

interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Section = ({ title, children }: SectionProps) => (
    <div className="section">
      <div className="window-bar">
        {title ? <h2 className="section-title">{title}</h2> : null}
        { title == "Case Study" ? <Link className="close-btn" to="/projects"><i className="fa-solid fa-x fa-xs window-x"></i></Link> : null}
        {/* { title == "Projects" || "About" ? <Link className="close-btn" to="/"><i className="fa-solid fa-x fa-xs window-x"></i></Link> : null} */}
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
  
  export default Section;