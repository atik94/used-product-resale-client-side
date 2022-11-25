import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8">
        <h2 className="text-3xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Your name is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && <p className="text-red-700">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-700">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Your password is required",
                minLength: { value: 8, message: "Password must be 8 character or more than longer" },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-700">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full mt-4" value="Sign Up" type="submit" />
        </form>
        <p>
          Have an account ?{" "}
          <Link className="text-accent" to="/login">
            Please login here
          </Link>
        </p>
        <div className="divider"></div>
        <button className="btn btn-outline w-full">Google signup</button>
      </div>
    </div>
  );
};

export default SignUp;
