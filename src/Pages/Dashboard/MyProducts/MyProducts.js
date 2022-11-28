import { useQuery } from "@tanstack/react-query";
import React from "react";
const MyProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  return (
    <div>
      <h2>MyProducts</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Category</th>
              <th>Name</th>
              <th>Picture</th>
              <th>Price</th>
              <th>Condition</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>{product.category_name}</td>
                <td>{product.category_name}</td>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={product.picture} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.resalePrice}</td>
                <td>{product.conditionType}</td>
                <td>
                  <button className="btn btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
