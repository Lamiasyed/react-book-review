import PropTypes from "prop-types";
// import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Books({ books }) {
  return (
    <div className="container mx-auto max-w-screen-lg">
      {books.map((book) => (
        <Link key={book.id} to={`/detail/${book.id}`}>
          <div className="card shadow-md" key={book.id}>
            <div className="mx-auto">
              <img src={book.image} alt="" />
            </div>
            <div>
              <ul className="flex py-4 justify-between items-center pr-10">
                <li className="text-[#23BE0A] font-medium text-lg">{book.author.slice(0, 7)}</li>
                <li className="text-[#23BE0A] font-medium text-lg">{book.category.slice(0, 7)}</li>
              </ul>
              <h1 className="text-xl font-bold text-center py-4">{book.bookName.slice(0, 14)}</h1>
            </div>
            <div className="py-4">
              <hr />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold gap-1">Tag{book.tags}</span>
              <p className="flex items-center gap-1">
                {book.rating} <AiOutlineStar />
              </p>
            </div>
            <div></div>
          </div>
        </Link>
      ))}
    </div>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      bookName: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      totalPages: PropTypes.number.isRequired,
      publisher: PropTypes.string.isRequired,
      yearOfPublishing: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Books;
