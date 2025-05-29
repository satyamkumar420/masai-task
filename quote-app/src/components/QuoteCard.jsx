import React from "react"; // ✅ Import React

const QuoteCard = ({ quote, author, fontSize, themeColor }) => {
  // 💡 Props for dynamic content and styling
  const cardClasses = `p-8 rounded-lg shadow-lg transition-colors duration-300 ${
    themeColor === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-white"
  }`; // 🎨 Dynamic card background and text color
  const quoteTextClasses = `italic mb-4 ${fontSize}`; // 📏 Dynamic font size

  return (
    <div className={cardClasses}>
      {" "}
      {/* 🖼️ Quote card container */}
      <p className={quoteTextClasses}>"{quote}"</p> {/* 💬 Quote content */}
      <p className="text-right font-medium">- {author}</p>{" "}
      {/* ✍️ Author name */}
    </div>
  );
};

export default QuoteCard; // 📦 Export for use in App.jsx
