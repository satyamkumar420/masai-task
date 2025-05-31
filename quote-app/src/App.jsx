import { useState, useEffect } from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";
import QuoteButton from "./components/QuoteButton";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [quote, setQuote] = useState({
    q: "The only way to do great work is to love what you do.",
    a: "Steve Jobs",
  });
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("text-xl");
  const [isLiked, setIsLiked] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://zenquotes.io/api/random");
      const data = response.data[0];
      setQuote({ q: data.q, a: data.a });
      setIsLiked(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote({ q: "Failed to fetch quote. Please try again.", a: "Error" });
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 👍 Function to toggle like status
  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  // 📏 Function to handle font size change
  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  // 🎨 Dynamic background and text color based on theme
  const appClasses = `min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 ${
    theme === "light"
      ? "bg-gray-100 text-gray-900"
      : "bg-gray-900 text-gray-100"
  }`;

  return (
    <div className={appClasses}>
      {" "}
      <h1 className="text-4xl font-bold mb-8">Motivational Quotes</h1>{" "}
      <div className="mb-8">
        {" "}
        <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
        <select
          onChange={handleFontSizeChange}
          value={fontSize}
          className={`ml-4 p-2 rounded-md ${
            theme === "light"
              ? "bg-white text-gray-800 border border-gray-300"
              : "bg-gray-700 text-white border border-gray-600"
          }`}
        >
          <option value="text-lg">Small</option>
          <option value="text-xl">Medium</option>
          <option value="text-2xl">Large</option>
          <option value="text-3xl">Extra Large</option>
        </select>
      </div>
      <QuoteCard
        quote={quote.q}
        author={quote.a}
        fontSize={fontSize}
        themeColor={theme}
      />{" "}
      <div className="mt-8 flex space-x-4">
        {" "}
        <QuoteButton
          onClick={fetchQuote}
          className={`${
            theme === "light"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-700 text-white hover:bg-blue-600"
          }`}
        >
          {" "}
          New Quote
        </QuoteButton>
        <QuoteButton
          onClick={toggleLike}
          className={`${
            theme === "light"
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-red-700 text-white hover:bg-red-600"
          }`}
        >
          {" "}
          {isLiked ? "Liked! 👍" : "Like Quote ❤️"}
        </QuoteButton>
      </div>
    </div>
  );
}

export default App;
