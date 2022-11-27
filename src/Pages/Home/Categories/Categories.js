import React, { useEffect, useState } from "react";
import Category from "./Category";
const Categories = () => {
  // const categoriesOption = [
  //   {
  //     id: "01",
  //     name: "Lenovo",
  //   },
  //   {
  //     id: "02",
  //     name: "Asus",
  //   },
  //   {
  //     id: "03",
  //     name: "Dell",
  //   },
  // ];
  const [categoriesOption, setCategoriesOption] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setCategoriesOption(data));
  }, []);
  return (
    <div className="mt-16">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoriesOption.slice(0, 3).map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
