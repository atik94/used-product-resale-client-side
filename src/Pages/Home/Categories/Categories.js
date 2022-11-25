import React from "react";
import Category from "./Category";

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      name: "Lenovo",
    },
    {
      id: 2,
      name: "Asus",
    },
    {
      id: 1,
      name: "Dell",
    },
  ];
  return (
    <div className="mt-16">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoriesData.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
