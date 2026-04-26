interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Section = ({ title, children }: SectionProps) => (
    <div className="section">
      <div className="window-bar">
        {title ? <h2 className="section-title">{title}</h2> : null}
        { title? null : <i className="fa-solid fa-x window-x"></i> }
      </div>
      <div className="section-content">
        {children}
      </div>
    </div>
  );
  
  export default Section;