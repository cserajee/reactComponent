import React from "react";

const Category = ({ categories, cantegoryFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => cantegoryFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
