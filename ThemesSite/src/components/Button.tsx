import { Link } from "react-router-dom";

interface ButtonProps {
  to: string;
  label: string;
}

const Button = ({ to, label }: ButtonProps) => (
  <Link to={to} className="btn">
    {label}
  </Link>
);

export default Button; 