import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="jumbotron">
        <div className="jumbo-row">
            <div className="jumbotron-text">
                <h1>A World of Books Waiting to Be Discovered by You</h1>
                <p>
                Explore a world of books tailored to your interests. Uncover new stories, 
                authors, and genres effortlessly. Find the books that inspire you today.
                </p>
            </div>
            <div className="jumbotron-image">
                <img src= "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982164119/how-to-slay-a-dragon-9781982164119_hr.jpg" 
                alt="How to Slay a Dragon" 
                />
            </div>
        </div>
    </header>
  );
};

export default Header;
