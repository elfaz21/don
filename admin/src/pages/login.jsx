import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "abrsh" && password === "123") {
      navigate("/dashboard");
    } else {
      setError("Incorrect username or password. Please try again.");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center mt-8">
      <div className="logo flex flex-col items-center">
        <img src="./logo.png" className="w-20" alt="" />
        <div className="col flex gap-3 -mt-5">
          <img src="./don.png" className="w-16" alt="" />
          <h1 className="text-4xl pt-5 text-BlueBlackColor font-bold">
            DON DEN<span className="text-black">TAL CLINIC </span>
          </h1>
        </div>
      </div>
      <div className="login border px-10 py-5 mt-16 rounded-lg">
        <h2 className="bg-white text-black text-5xl fixed -mt-12 font-semibold">
          Log<span className="text-BlueBlackColor">in</span>
        </h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="input-group flex flex-col gap-2 mb-5 mt-7">
            <label htmlFor="username" className="text-sm font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border rounded-lg py-2 md:w-80 xs:w-72 text-xs"
            />
          </div>
          <div className="input-group flex flex-col gap-2 mb-5">
            <label htmlFor="password" className="text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg py-2 md:w-80 xs:w-72 text-xs"
            />
          </div>
          <div className="input-group gap-2 mb-5">
            <button
              type="submit"
              className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 rounded-lg hover:bg-black"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
