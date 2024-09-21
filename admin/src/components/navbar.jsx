import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="fixed top-0 left-0 h-18 bg-white z-50 overflow-y-auto">
      <div className="p-4">
        <Link to="/dashboard" className="flex items-center">
          <img src="./logo.png" className="w-14" alt="" />
          <h1 className="text-BlueBlackColor text-sm font-bold ml-2">
            Don Dental Clinic
          </h1>
        </Link>
      </div>
      {/* Hamburger Icon */}
      <button
        className="md:hidden fixed top-4 right-4 p-2 rounded-lg bg-gray-200 z-50"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
      <ul
        className={`flex flex-col ${
          isMenuOpen ? "block" : "hidden"
        } md:flex fixed top-30 left-0 h-screen w-64 bg-white shadow-lg z-40`}
      >
        <li>
          <Link to="/dashboard" className="p-4 hover:bg-gray-200 block">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="p-4 hover:bg-gray-200 block">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/new-blog" className="p-4 hover:bg-gray-200 block">
            New Blog
          </Link>
        </li>
        <li>
          <Link to="/appointments2" className="p-4 hover:bg-gray-200 block">
            Appointments
          </Link>
        </li>
        <li>
          <Link to="/new-appointment" className="p-4 hover:bg-gray-200 block">
            New Appointment
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="p-4 w-full bg-BlueBlackColor text-center text-white block hover:bg-black mt-4"
          >
            Logout
          </button>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default SideBar;
