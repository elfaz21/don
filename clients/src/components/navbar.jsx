import { Link, Outlet } from "react-router-dom"
import { useState } from "react"


function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return(
        <div className="flex justify-center">
            <nav className=" fixed bg-white rounded-lg w-10/12 mt-3 shadow-lg">
            <div className="container grid grid-cols-2 gap-x-5 my-1 items-center lg:flex lg:justify-between lg:px-10 md:px-5 sm:px-5 ">
                <div className="logo">
                    <Link to="/" className="flex">
                    <img src="./logo.png" className="w-14" alt="" />
                    <h1 className="text-BlueBlackColor text-sm font-bold pt-3">Don Dental Clinic</h1>
                    </Link>
                </div>
                <div className="lg:hidden px-5 flex justify-end">
            <button
              id="menu-toggle"
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <ul className={`font-semibold text-xs sm:text-sm flex flex-col lg:flex-row gap-3 lg:gap-10 items-end px-5  transition-all duration-300 ease-in-out ${isMenuOpen ? "block mt-3 mb-3  col-span-2" : "hidden"} lg:flex`}

>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="bg-BlueBlackColor text-white px-5 py-2 rounded-lg hover:bg-black ">Sign Up</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </nav>
        </div>
    )
}
export default Navbar