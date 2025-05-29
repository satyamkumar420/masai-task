import React from "react"; // ✅ Import React

const QuoteButton = ({ onClick, children, className = "" }) => {
  // 🧩 Reusable button component
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${className}`} // 🎨 Tailwind classes for styling
    >
      {children}
    </button>
  );
};

export default QuoteButton; // 🚀 Export for use in other components
