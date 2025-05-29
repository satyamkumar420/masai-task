import React from "react"; // ✅ Import React
import QuoteButton from "./QuoteButton"; // 🧩 Import our reusable button

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  // 💡 Theme management via props
  const buttonText =
    currentTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"; // 📝 Dynamic button text
  const buttonClass =
    currentTheme === "light"
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "bg-gray-700 text-white hover:bg-gray-600"; // 🎨 Dynamic button styling

  return (
    <QuoteButton onClick={toggleTheme} className={buttonClass}>
      {" "}
      {/* 🚀 Use QuoteButton for consistency */}
      {buttonText}
    </QuoteButton>
  );
};

export default ThemeToggle; // 📦 Export for use in App.jsx
