import React from "react";

const Button = () => {
  return (
    <button
      className="lg:block text-base bg-[#c9184a] px-3 py-1 rounded text-white 
        transition-all duration-300 hover:bg-[#a3153b] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#a3153b]"
      
      aria-label="Download Resume"
    >
      Resume
    </button>
  );
};

export default Button;
