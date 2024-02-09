import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readMore ? `${info.substring(0, 200)}...` : info}</p>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "read more" : "show less"}
        </button>
      </div>
      <button
        type="button"
        className="btn btn-block delete-btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        Not Intrested
      </button>
    </article>
  );
};

export default Tour;
