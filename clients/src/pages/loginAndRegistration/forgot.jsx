import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        "https://don-server-75q6.onrender.com/api/forget-password",
        { email }
      );

      if (response.status === 200) {
        setMessage("Password reset link sent to your email.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="main-cont">
      <div className="user-registration">
        <h2>Forgot Password</h2>
        <p>Please enter your email address to receive a password reset link.</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleResetPassword}>Reset Password</button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
