import QuoteButton from "./QuoteButton"; // 🧩 Import our reusable button

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  const buttonText =
    currentTheme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
  const buttonClass =
    currentTheme === "light"
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "bg-gray-700 text-white hover:bg-gray-600";

  return (
    <QuoteButton onClick={toggleTheme} className={buttonClass}>
      {" "}
      {buttonText}
    </QuoteButton>
  );
};

export default ThemeToggle;
