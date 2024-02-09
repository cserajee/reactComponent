import React, { useState } from "react";
import reviews from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";

const ReviewApp = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const prevPerson = () => {
    setIndex((prevIndex) => {
      return (prevIndex - 1 + reviews.length) % reviews.length;
    });
  };

  const nextPerson = () => {
    setIndex((prevIndex) => {
      return (prevIndex + 1) % reviews.length;
    });
  };

  const randomPerson = () => {
    let newIndex = Math.floor(Math.random(0 * reviews.length));
    if (newIndex === index) {
      newIndex = index + 1;
    }
    setIndex(newIndex % reviews.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default ReviewApp;
