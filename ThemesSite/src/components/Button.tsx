

interface ButtonProps {
  OnClick: () => void;
  label: string;
}

const Button = ({ OnClick, label }: ButtonProps) => (
  <button onClick={OnClick} className="btn">
    {label}
  </button>
);

export default Button; 