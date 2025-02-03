import React from "react";
import BookCard from "./BookCard";
import "../css/Book.css";

const BookList = ({ books }) => {
  if (!books.length) {
    return <p className="text-center text-gray-500">No books found.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key || book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
