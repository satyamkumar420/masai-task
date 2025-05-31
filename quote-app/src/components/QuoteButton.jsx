const QuoteButton = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default QuoteButton;
