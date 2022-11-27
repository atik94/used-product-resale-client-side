import React from "react";

const CategorySingleProduct = ({ singleProduct }) => {
  console.log(singleProduct);
  const {
    name,
    picture,
    conditionType,
    description,
    location,
    mobileNumber,
    originalPrice,
    resalePrice,
    sellersName,
    yearOfUse,
  } = singleProduct;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Laptop Condition: {conditionType}</p>
        <p>Original Price: {originalPrice}</p>
        <p>Resale Price: {resalePrice}</p>
        <p>Uses: {yearOfUse}</p>
        <p>Location: {location}</p>
        <p>Sellers Name: {sellersName}</p>
        <p>Phone: {mobileNumber}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategorySingleProduct;
