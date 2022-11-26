import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { id, category_name } = category;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <Link to={`/category/${id}`}>
          <p>{category_name}</p>
        </Link>
      </div>
    </div>
  );
};

export default Category;
