import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

function Blogs() {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [deleteBlog, setDeleteBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [editedData, setEditedData] = useState({
    blogTitle: "",
    blogDescription: "",
    blogImage: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const blogImage = reader.result;
        setEditedData({ ...editedData, blogImage });
      };
      reader.readAsDataURL(file);
    }
  };

  const getBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/blogs");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error retrieving blogs:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setEditedData({
      blogTitle: blog.blogTitle,
      blogDescription: blog.blogDescription,
    });
    setEditModalVisible(true);
  };

  const handleDelete = (blog) => {
    setDeleteBlog(blog);
    setDeleteModalVisible(true);
  };

  const handleEditSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:7000/api/blogs/${editBlog._id}`,
        editedData
      );
      console.log("Blog updated successfully:", response.data);
      setEditModalVisible(false);
      getBlogs();
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDeleteSubmit = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/api/blogs/${deleteBlog._id}`
      );
      console.log("Blog deleted successfully:", response.data);
      setDeleteModalVisible(false);
      getBlogs();
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const truncateDescription = (description) => {
    if (description.length > 100) {
      return description.slice(0, 100) + "...";
    }
    return description;
  };

  return (
    <div className="md:ml-64">
      <Navbar />

      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-20 px-3 mx-20 py-2 border border-gray-300 rounded-md"
        />
        <h1 className="text-3xl font-bold mb-4 mt-10 text-center">Blogs</h1>
        {loading ? (
          <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-900 mt-20"></div>
          </div>
        ) : (
          <div className="mx-4">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                      Blog Image
                    </th>
                    <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                      Title
                    </th>
                    <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                      Blog Description
                    </th>
                    <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {blogs
                    .filter((blog) =>
                      blog.blogTitle
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    )
                    .map((blog) => (
                      <tr key={blog._id}>
                        <td className="py-4 px-6">
                          <img
                            src={blog.blogImage}
                            className="w-16 h-16 mr-2 rounded-full sm:rounded-full"
                            alt="Blog"
                          />
                        </td>
                        <td className="py-4 px-6 font-bold">
                          {blog.blogTitle}
                        </td>
                        <td className="py-4 px-6">
                          {truncateDescription(blog.blogDescription)}
                        </td>
                        <td className="py-4 px-6 flex">
                          <img
                            src="./edit.png"
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "10px",
                            }}
                            className="cursor-pointer"
                            alt="Edit"
                            onClick={() => handleEdit(blog)}
                          />
                          <img
                            src="./delete.png"
                            style={{ width: "20px", height: "20px" }}
                            className="cursor-pointer"
                            alt="Delete"
                            onClick={() => handleDelete(blog)}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {editBlog && editModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded">
            <div className="flex justify-between px-5 py-5 xs:px-10">
              <h2 className="font-bold text-lg">Edit Blog</h2>
              <img
                src="./close.png"
                alt=""
                onClick={closeEditModal}
                className="cursor-pointer w-5 h-5"
              />
            </div>
            <hr />
            <div className="row px-24 py-10 overflow-y-scroll md:h-[400px] sm:h-[400px] lg:h-[500px] lg:overflow-auto xls:h-[350px] xls:px-10 xs:h-[350px] xs:px-10">
              <form action="">
                <div className="input-group flex flex-col mb-3">
                  <label htmlFor="title" className="font-bold text-sm">
                    Blog Image:
                  </label>
                  <input
                    type="file"
                    name="blogImage"
                    className="input-field mt-1 p-2 block w-full rounded-md"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="title" className="font-bold text-sm mb-1">
                    Blog Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={editedData.blogTitle}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        blogTitle: e.target.value,
                      })
                    }
                    className="border rounded-md w-72 px-3 py-1 text-sm"
                  />
                </div>
                <div className="input-group flex flex-col mb-3">
                  <label
                    htmlFor="description"
                    className="font-bold text-sm mb-1"
                  >
                    Blog Description:
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    name="description"
                    value={editedData.blogDescription}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        blogDescription: e.target.value,
                      })
                    }
                    className="border rounded-md w-72 px-3 py-1 text-sm"
                  ></textarea>
                </div>
                <div className="input-group flex flex-col mb-3">
                  <button
                    onClick={handleEditSubmit}
                    className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 rounded-lg hover:bg-black"
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {deleteBlog && deleteModalVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded w-96">
            <div className="flex justify-between px-5 py-5">
              <h2 className="font-bold text-lg">Delete Blog</h2>
              <img
                src="./close.png"
                alt=""
                onClick={closeDeleteModal}
                className="cursor-pointer w-5 h-5"
              />
            </div>
            <hr />
            <div className="md:px-14 py-10 sm:px-10 xs:px-10">
              <h2>Are you sure you want to delete this Blog?</h2>
              <div className="flex justify-between mt-9">
                <div>
                  <button
                    className="bg-transparent text-BlueBlackColor text-sm font-bold px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray"
                    onClick={handleDeleteSubmit}
                  >
                    Yes
                  </button>
                </div>
                <div>
                  <button
                    className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 rounded-lg hover:bg-black"
                    onClick={closeDeleteModal}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
