import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsAuthenticated } from "../userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };
  const handleLogin = (e) => {
    e.preventDefault();

    // Dispatch login action
    dispatch(login({ email, password }));

    if (isAuthenticated) {
      alert("Login successful!");
      navigate("/welcome"); // Navigate to a dashboard or home page
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col m-auto max-w-[200px] mt-[40px] 
        md:flex md:flex-col md:m-auto md:max-w-[300px] md:mt-[80px] 
        lg:flex lg:flex-col lg:m-auto lg:max-w-[500px] lg:mt-[120px] lg:border-2 lg:border-gray-500 lg:p-10 rounded-lg"
    >
      <h1 className="lg:text-center md:text-center lg:mb-[10px]">LOGIN</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="lg:mb-[10px] lg:p-[8px] lg:border lg:border-gray-700 lg:rounded-lg
        mb-[5px] p-[4px] border border-black-700 rounded-sm "
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="lg:mb-[10px] lg:p-[8px] lg:border lg:border-gray-700 lg:rounded-lg
        mb-[5px] p-[4px] border border-black-700 rounded-sm "
      />
      <button
        type="submit"
        className="p-[8px] bg-blue-700 text-white rounded-lg md:bg-green-500 lg:bg-red-400"
      >
        Login
      </button>
      <a className="lg:text-center md:text-center lg:mb-[10px] text-green-500 lg:text-blue-500 cursor-pointer" onClick={handleRegisterClick}>
        Register
      </a>
    </form>
  );
};

export default Login;
