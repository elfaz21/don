import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../context/Context";
import axios from "axios";

const UserEdit = () => {
  const { userId } = useContext(MyContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNumber] = useState("");
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://don-server-75q6.onrender.com/api/users/${userId}`
        );
        const userData = response.data;

        setName(userData.name);
        setEmail(userData.email);
        setImageUrl(userData.imageUrl);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for preview
      setImageUrl(imageUrl); // Set the image URL in the state
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.get(
        `https://don-server-75q6.onrender.com/api/users/${userId}`
      );
      const userData = response.data;

      if (prevPassword !== userData.password) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);

        const updatedData = {
          name,
          phoneNo,
          email,
          imageUrl,
        };

        if (newPassword) {
          updatedData.password = newPassword;
        }

        await axios.put(
          `https://don-server-75q6.onrender.com/api/users/${userId}`,
          updatedData
        );

        navigate("/");
      }
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: "linear-gradient(to left, #040a8b, #e6e6e6)" }}
    >
      <div
        className="w-full max-w-md bg-white p-8 rounded shadow-md"
        style={{ background: "linear-gradient(to right, #040a8b, #e6e6e6)" }}
      >
        <h2 className="text-2xl text-white font-bold text-center mb-10">
          Edit User Information
        </h2>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field p-2 block w-full rounded-md"
        />
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field mt-4 p-2 block w-full rounded-md"
        />
        <input
          placeholder="phone"
          type="number"
          value={phoneNo}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="input-field mt-4 p-2 block w-full rounded-md"
        />
        <input
          placeholder="Current Password"
          type="password"
          value={prevPassword}
          onChange={(e) => setPrevPassword(e.target.value)}
          className="input-field mt-4 p-2 block w-full rounded-md"
        />
        <input
          placeholder="New Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="input-field mt-4 p-2 block w-full rounded-md"
        />
        <input
          type="file"
          className="input-field mt-4 p-2 block w-full rounded-md"
          onChange={(e) => handleFileUpload(e)}
        />

        {passwordMatchError && (
          <p className="text-red-500 text-sm mt-2">
            Previous password does not match.
          </p>
        )}

        <button
          onClick={handleUpdate}
          className="w-full bg-gradient-to-r from-blue-100 to-white-500 hover:from-white-500 to-blue-600 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline transition-all duration-300"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UserEdit;
