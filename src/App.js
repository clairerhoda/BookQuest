import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import Header from "./components/Header";
import CategoryTabs from "./components/CategoryTabs";
import BookQuestLogo from "./assets/BookQuestLogo.png";
import LoadingBook from "./components/Loading";
import { fetchBooksBySearch, fetchBooksByCategory } from "./utils/fetchBooks";

import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchBooksHandler = async (query, isCategory = false) => {
    setLoading(true);
    if (!initialLoad) {
      setShowHeader(false);
    }
    setInitialLoad(false);

    try {
      const books = isCategory ? await fetchBooksByCategory(query) : await fetchBooksBySearch(query);
      setBooks(books);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooksHandler("sword magic", false);
  }, []);

  const handleSearch = (searchTerm) => {
    setSelectedCategory(null);
    fetchBooksHandler(searchTerm, false);
  };

  const homeClick = async () => {
    setSelectedCategory(null);
    setShowHeader(true);
    try {
      const books = await fetchBooksBySearch("sword magic");
      setBooks(books);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App p-4">
        <div className="logo" onClick={homeClick}>
          <img id="logo-img" src={BookQuestLogo} alt="Book Quest Logo" />
        </div>
        <CategoryTabs categorySelect={setSelectedCategory} selectedCategory={selectedCategory} fetchBooksHandler={fetchBooksHandler} />
        <SearchBar onSearch={handleSearch} />
        {showHeader && <Header />}
        {loading ? <LoadingBook /> : <BookList books={books} />}
      </div>
    </Router>
  );
};

export default App;
