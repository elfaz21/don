import React, { useState, useEffect } from "react";
import axios from "axios";

const UserLists = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/users");
        setUsers(response.data.reverse());
      } catch (error) {
        console.error("Error fetching users: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => prevIndex - itemsPerPage);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:7000/api/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
    setShowModal(false);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const openModal = (userId) => {
    setDeleteUserId(userId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-900 mt-30"></div>
        </div>
      ) : (
        <div className="bg-white p-8">
          <h1 className="text-center text-4xl font-extrabold text-blue-900 mt-10">
            Users
          </h1>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-5 px-5 mb-8 py-2 border border-gray-300 rounded-md"
          />
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border-spacing-4">
              <thead>
                <tr className="border bg-blue text-sm text-blue-900">
                  <th className="px-5 py-2">Name</th>
                  <th className="px-5 py-2">Phone</th>
                  <th className="px-5 py-2">Email</th>
                  <th className="px-5 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedUsers.map((user) => (
                  <tr key={user._id} className="border-b text-sm text-center">
                    <td className="py-2 flex items-center">
                      {user.imageUrl && (
                        <img
                          src={user.imageUrl}
                          alt="User"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      )}
                      <span>{user.name}</span>
                    </td>
                    <td className="py-2">{user.phoneNo}</td>
                    <td className="py-2">{user.email}</td>
                    <td className="py-2">
                      <button
                        onClick={() => openModal(user._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-5">
            <button
              onClick={handlePrevious}
              disabled={startIndex === 0}
              className="px-3 py-2 border border-black text-black rounded-md flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Previous</span>
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= filteredUsers.length}
              className="px-3 py-2 border border-black text-black rounded-md flex items-center"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {showModal && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-8 rounded w-96">
                <div className="flex justify-between px-5 py-5">
                  <h2 className="font-bold text-lg">Delete user</h2>
                  <img
                    src="./close.png"
                    alt=""
                    onClick={closeModal}
                    className="cursor-pointer w-5 h-5"
                  />
                </div>
                <hr />
                <div className="px-10 py-5">
                  <h2>Are you sure you want to delete this user?</h2>
                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-transparent text-BlueBlackColor text-sm font-bold px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray"
                      onClick={() => handleDeleteUser(deleteUserId)}
                    >
                      Yes
                    </button>
                    <button
                      className="bg-gray-300 text-sm font-bold text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-400"
                      onClick={closeModal}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserLists;
