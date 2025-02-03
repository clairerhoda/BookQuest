import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Sword } from "../assets/sword.svg";

import "../css/CategoryTabs.css";

const categories = ["Fiction", "Fantasy", "Non-Fiction", "Sci-Fi", "Mystery", "Romance"];

const CategoryTabs = ({ categorySelect, selectedCategory, fetchBooksHandler }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    navigate(`/books?category=${encodeURIComponent(category)}`);
    fetchBooksHandler(category, true);
    categorySelect(category);
  };

  useEffect(() => {
    if (selectedCategory === null) {
      setActiveCategory(null);
    }
  }, [selectedCategory]);

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`category-btn ${category === activeCategory ? "active" : ""}`}
        >
          {category === activeCategory && <span className="sword"><Sword /></span>}
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
