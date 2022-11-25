import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-8">
        <h2 className="text-3xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
            <label className="label">
              <span className="label-text">Forget Password</span>
            </label>
          </div>
          <input className="btn btn-accent w-full" value="Login" type="submit" />
          <div>{loginError && <p className="text-red-700">{loginError}</p>}</div>
        </form>
        <p>
          New to Website{" "}
          <Link className="text-accent" to="/signup">
            Create new account here
          </Link>
        </p>
        <div className="divider"></div>
        <button className="btn btn-outline w-full">Google signup</button>
      </div>
    </div>
  );
};

export default Login;
