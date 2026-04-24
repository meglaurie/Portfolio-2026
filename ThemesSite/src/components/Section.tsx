interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  const Section = ({ title, children }: SectionProps) => (
    <div className="section">
      <div className="window-bar">
        {title ? <h2 className="section-title">{title}</h2> : null}
      </div>
      {children}
    </div>
  );
  
  export default Section;