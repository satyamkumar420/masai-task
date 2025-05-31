const QuoteCard = ({ quote, author, fontSize, themeColor }) => {
  const cardClasses = `p-8 rounded-lg shadow-lg transition-colors duration-300 ${
    themeColor === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-white"
  }`;
  const quoteTextClasses = `italic mb-4 ${fontSize}`;

  return (
    <div className={cardClasses}>
      {" "}
      <p className={quoteTextClasses}>
        <i>"{quote}"</i>
      </p>
      <p className="text-right font-medium">- {author}</p>{" "}
    </div>
  );
};

export default QuoteCard; // 📦 Export for use in App.jsx
