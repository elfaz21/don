import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserId, setIsLoggedIn } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setErrorMessage("Please enter your email and password.");
        return;
      }

      const response = await axios.post(
        "https://don-server-75q6.onrender.com/api/login",
        {
          email,
          password,
        }
      );

      if (response.data) {
        setIsLoggedIn(true);
        navigate("/");
        setUserId(response.data.id);
      }
    } catch (error) {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l px-5 from-blue-800 to-gray-200">
      <div
        className="w-full max-w-md bg-white p-8 rounded shadow-md"
        style={{ background: "linear-gradient(to right, #040a8b, #e6e6e6)" }}
      >
        <h2 className="text-2xl text-white font-bold text-center mb-10">
          Sign In
        </h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <input
          className="input-field p-2 block w-full rounded-md mt-4"
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field p-2 block w-full rounded-md mt-4"
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-blue-100 to-white-500 hover:from-white-500 to-blue-600 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline transition-all duration-300"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <p className="text-right mt-4">
          <Link to="/forgot-password" className="text-blue-500">
            Forgot Password?
          </Link>
        </p>
        <div className="text-center mt-4">
          <p className="text-white">
            Don't have an account
            <Link to="/register" className="text-blue-100 p-3">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
