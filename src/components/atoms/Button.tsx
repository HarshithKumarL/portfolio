import { ButtonProps } from "@/types/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseStyle =
    "rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#C34124] to-[#F99A85] text-white hover:brightness-110",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    ghost: "bg-transparent text-white border border-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
