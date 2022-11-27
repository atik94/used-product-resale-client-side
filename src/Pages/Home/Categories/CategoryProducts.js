import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategorySingleProduct from "./CategorySingleProduct";

const CategoryProducts = () => {
  const { category_name } = useLoaderData();
  const [categoryProduct, setCategoryProduct] = useState([]);
  //console.log(categoryProduct);
  useEffect(() => {
    fetch(`http://localhost:5000/products?category_name=${category_name}`)
      .then((res) => res.json())
      .then((data) => setCategoryProduct(data));
  }, [category_name]);
  return (
    <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      {categoryProduct.map((singleProduct) => (
        <CategorySingleProduct key={singleProduct._id} singleProduct={singleProduct}></CategorySingleProduct>
      ))}
    </div>
  );
};

export default CategoryProducts;
