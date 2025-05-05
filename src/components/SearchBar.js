import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import "../css/Search.css";

const SearchBar = ({ onSearch }) => {
  const [placeholder, setPlaceholder] = useState("Adventure with epic quests");
  const [opacity, setOpacity] = useState(1);

  const searchPhrases = [
    "Adventure with epic quests",
    "Sci-fi with time travel",
    "Mystery with hidden secrets",
    "Romance with forbidden love",
    "Dark fantasy with ancient ruins",
    "Non-fiction about history",
  ];

  useEffect(() => {
    let index = 0;
  
    const updatePlaceholder = () => {
      setOpacity(0);
      setTimeout(() => {
        index = (index + 1) % searchPhrases.length;
        setPlaceholder(searchPhrases[index]);
        setOpacity(1); 
      }, 300);
    };
  
    const interval = setInterval(updatePlaceholder, 3000);
    return () => clearInterval(interval);
  }, []);

  const inputRef = useRef();

  const handleSearch = () => {
    const searchTerm = inputRef.current.value;
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
      type="text"
      ref={inputRef}
      placeholder={placeholder}
      onKeyDown={handleKeyDown}
      className={`search-input ${opacity === 0 ? "fade-out" : ""}`}
    />
      <button
        onClick={handleSearch}
        className="search-button"
      >
        <Search size={20} color={"#242b2c"} />
      </button>
    </div>
  );
};

export default SearchBar;
