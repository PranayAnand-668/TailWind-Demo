import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, selectIsAuthenticated } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

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
  const handleResetClick = () => {
    navigate("/resetPass");
  };

  return (<>
    <header className="flex justify-between p-4 mt-4 items-center lg:hidden">
      <IoChevronBackCircleOutline className="text-5xl" onClick={()=>{navigate("/register")}}/>
      <h1 className="text-3xl font-bold">Log in</h1>
      <span></span>
    </header>
    <form
      onSubmit={handleLogin}
      className="flex flex-col m-auto p-4 mt-[40px] 
        md:flex md:flex-col md:m-auto md:max-w-[300px] md:mt-[80px] 
        lg:flex lg:flex-col lg:m-auto lg:max-w-[500px] lg:mt-[120px] lg:border-2 lg:border-gray-500 lg:p-10 rounded-lg"
    >
      <h1 className="font-bold text-3xl mb-5 lg:text-center md:text-center lg:mb-[10px]">
        Let's sign you in.
      </h1>
      <label htmlFor="email" className="text-gray-500 font-bold py-2">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="lg:mb-[10px] lg:p-[8px] lg:border lg:border-gray-700
        mb-[5px] p-4 border border-gray-300 rounded-lg "
      />
      <label htmlFor="pass" className="text-gray-500 font-bold py-2">
        Password
      </label>
      <input
        id="pass"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="lg:mb-[10px] lg:p-[8px] lg:border lg:border-gray-700
        mb-[5px] p-4 border border-gray-300 rounded-lg "
      />
      <div className="flex justify-between">
        <a
          className="lg:text-center md:text-center lg:mb-[10px] text-blue-500 font-bold py-2 cursor-pointer"
          onClick={handleRegisterClick}
        >
          Register
        </a>
        <a
          className="lg:text-center md:text-center lg:mb-[10px] text-blue-500 font-bold py-2 cursor-pointer"
          onClick={handleResetClick}
        >
          Reset Password
        </a>
      </div>

      <button
        type="submit"
        className="p-6 font-bold text-lg mb-20 bg-blue-700 text-white rounded-lg fixed bottom-0 w-[90%] mx-auto lg:relative lg:p-2 lg:w-[100%] lg:mb-2 lg:bg-red-400"
      >
        Log In
      </button>
    </form>
    </>
  );
};

export default Login;
