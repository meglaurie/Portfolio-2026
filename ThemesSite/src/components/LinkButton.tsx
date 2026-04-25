import { Link } from "react-router-dom";

interface LinkButtonProps {
  to: string;
  label: string;
}

const LinkButton = ({ to, label }: LinkButtonProps) => (
  <Link to={to} className="btn">
    {label}
  </Link>
);

export default LinkButton; 