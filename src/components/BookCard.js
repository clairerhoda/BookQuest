import React from "react";

const BookCard = ({ book }) => {
  const title = book.title || book.work_title || "Unknown Title";
  const authors = book.author_name || (book.authors ? book.authors.map(a => a.name) : []);
  const coverID = book.cover_i || book.cover_id;
  const infoLink = `https://openlibrary.org${book.key}`; // Use Open Library URL for book details

  return (
    <a href={infoLink} target="_blank" rel="noopener noreferrer" className="select-book">
      {coverID ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${coverID}-L.jpg`}
          alt={title}
          className="book-img"
        />
      ) : (
        <div className="book-img" id="empty-cover" style={{ display: "flex", alignItems: "center" }}>
          Book Cover Not Available
        </div>
      )}
      <div className="book-info">
        <div className="book-title">{title}</div>
        <div className="author-box">
          <div className="author">by {authors.length ? authors.join(", ") : "Unknown Author"}</div>
        </div>
      </div>
    </a>
  );
};

export default BookCard;
