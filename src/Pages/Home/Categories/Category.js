import React from "react";

const Category = ({ category }) => {
  const { name } = category;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Category;
