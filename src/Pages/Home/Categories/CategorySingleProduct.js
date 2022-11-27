import React from "react";

const CategorySingleProduct = ({ singleProduct, setOrders }) => {
  //console.log(singleProduct);
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
          <label htmlFor="booking-modal" className="btn btn-primary" onClick={() => setOrders(singleProduct)}>
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategorySingleProduct;
