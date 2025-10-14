import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className}  py-3 text-light font-medium bg-primary transition-all duration-500 ease-linear hover:bg-alt rounded-lg px-6 `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
