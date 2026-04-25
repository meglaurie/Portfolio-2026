interface SectionTitleProps {
    title: string;
  }
  
  const SectionTitle = ({ title }: SectionTitleProps) => (
    <div className="title-styles">
      <h2>{title}</h2>
    </div>
  );
  
  export default SectionTitle;