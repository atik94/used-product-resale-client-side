import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password, data.role)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User registaion is success");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
          })
          .catch((error) => {
            console.log(error);
            setSignUpError(error.message);
          });
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
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
          <select {...register("role", { required: true })}>
            <option value="">Select...</option>
            <option value="sellers">sellers</option>
            <option value="buyers">buyers</option>
          </select>
          <input className="btn btn-accent w-full mt-4" value="Sign Up" type="submit" />
          {signUpError && <p className="text-red-700">{signUpError}</p>}
        </form>
        <p>
          Have an account ?{" "}
          <Link className="text-accent" to="/login">
            Please login here
          </Link>
        </p>
        <div className="divider"></div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
          Google signup
        </button>
      </div>
    </div>
  );
};

export default SignUp;
