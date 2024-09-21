import React, { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

function NewBlog() {
  const [blogImage, setBlogImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const blogImage = reader.result;
        setBlogImage(blogImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = {};

    formData.forEach((value, key) => {
      if (key === "blogImage") {
        const file = e.target[key].files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            payload[key] = reader.result;
            sendData(payload);
          };
          reader.readAsDataURL(file);
        }
      } else {
        payload[key] = value;
      }
    });

    setTimeout(() => {
      e.target.reset();
      setSuccessMessage(null);
    }, 3000);
  };

  const sendData = async (payload) => {
    try {
      const response = await axios.post(
        "https://don-server-75q6.onrender.com/api/blogs",
        payload
      );

      if (response.status === 200) {
        setSuccessMessage("Blog added successfully!");
      } else {
        console.error("Failed to add blog.");
      }
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-28 mx-auto w-[400px] flex flex-col items-center xs:w-[300px]">
        <h1 className="text-center font-bold text-BlueBlackColor text-4xl mb-9 xs:text-2xl">
          Add New Blog
        </h1>
        {successMessage && (
          <p className="text-green-500 font-bold mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleAddBlog}>
          <label htmlFor="title" className="font-bold text-sm">
            Blog Image:
          </label>
          <input
            type="file"
            name="blogImage"
            className="input-field mt-1 p-2 block w-full rounded-md"
            onChange={handleFileUpload}
          />

          <div className="input-group flex flex-col mb-5">
            <label htmlFor="blogTitle" className="font-bold text-sm mb-3">
              Blog Title:
            </label>
            <input
              type="text"
              id="blogTitle"
              name="blogTitle"
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
            />
          </div>
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="blogDescription" className="font-bold text-sm mb-3">
              Blog Description:
            </label>
            <textarea
              id="blogDescription"
              name="blogDescription"
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              style={{ height: "120px", wordWrap: "break-word" }}
            ></textarea>
          </div>
          <div className="input-group flex flex-col mb-5">
            <button className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 w-96 rounded-lg hover:bg-black xs:w-72">
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewBlog;
