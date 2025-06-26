import React from "react";
import "./Button.scss";
import { ButtonProps } from "./Button.types";
import Skeleton from "react-loading-skeleton";

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary", disabled = false , type = "button", classes = "", loading = false }) => {
  return (
    <button
      className={`componentButton ${variant} ${classes} `}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading ? <Skeleton className="w-full" /> : label}
    </button>
  );
};

export default Button;
