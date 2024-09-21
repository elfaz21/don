import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId, setIsLoggedIn } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(
          `https://don-server-75q6.onrender.com/api/users/${userId}`
        );
        const userData = await userResponse.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div
      className="profile-container bg-black p-4 text-center rounded-md"
      style={{
        background: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        backdropFilter: "blur(10px)",
        position: "absolute",
        top: "90px",
        right: "-70px",
        maxWidth: "800px",
      }}
    >
      {user && (
        <>
          <img
            className="user-avatar w-20 h-20 rounded-full mx-auto mb-4"
            src={user.imageUrl}
            alt="User Avatar"
          />
          <h1 className="text-2xl font-bold mb-2 text-white">{user.name}</h1>
          <h2 className="text-white mb-1">phone: {user.phoneNo}</h2>
          <h2 className="text-white mb-4">{user.email}</h2>
        </>
      )}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to="/userAppointments"
          className="btn border border-white text-white rounded-md mr-2 hover:bg-white hover:text-black"
        >
          Appointments
        </Link>

        <Link
          to="/edit"
          className="btn border border-white text-white rounded-md mr-2 hover:bg-white hover:text-black"
        >
          Edit Profile
        </Link>

        <Link
          to="/"
          onClick={handleLogout}
          className="btn bg-red-500 text-white rounded-md hover:bg-red-400"
        >
          Log Out
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
