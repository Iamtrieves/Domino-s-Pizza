import { ReactNode } from "react";
interface ButtonProps {
  text: string;
  className: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

const Button = ({
  text,
  className,
  icon,
  iconPosition,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} cursor-pointer`}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {text}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
