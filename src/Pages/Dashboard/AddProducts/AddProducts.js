import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const handleAddProducts = (data) => {
    console.log(data);
    const addProducts = {
      category_name: data.category_name,
      name: data.name,
      picture: data.picture,
      location: data.location,
      originalPrice: data.originalPrice,
      resalePrice: data.resalePrice,
      yearOfUser: data.yearOfUser,
      sellersName: data.sellersName,
      conditionType: data.conditionType,
      mobileNumber: data.mobileNumber,
      description: data.description,
    };
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProducts),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("products added successfully");
        navigate("/dashboard/myProducts");
      });
  };
  return (
    <div className="w-96 p-7">
      <h2 className="text-5xl">Add a products</h2>
      <form onSubmit={handleSubmit(handleAddProducts)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input
            type="text"
            {...register("category_name", { required: "Category name is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.category_name && <p className="text-red-700">{errors.category_name?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Picture</span>
          </label>
          <input
            type="text"
            placeholder="image url here"
            {...register("picture", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Original price</span>
          </label>
          <input
            type="text"
            {...register("originalPrice", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            type="text"
            {...register("resalePrice", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">year of use</span>
          </label>
          <input
            type="text"
            {...register("yearOfUse", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Sellers Name</span>
          </label>
          <input
            type="text"
            {...register("sellersName", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Mobile number</span>
          </label>
          <input
            type="text"
            {...register("mobileNumber", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
          {/* {errors.name && <p className="text-red-700">{errors.name?.message}</p>} */}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("description", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <select {...register("conditionType", { required: true })}>
          <option value="">Condition Type...</option>
          <option value="goog">good</option>
          <option value="fare">fare</option>
          <option value="excellent">excellent</option>
        </select>
        <input className="btn btn-accent w-full mt-4" value="Add Product" type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
