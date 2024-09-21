import { Outlet, Link } from "react-router-dom";
import smile from "../assets/smile.jpg";
import smilehero from "../assets/smile-hero.png";
import Reviews from "../components/reviews";

function Home() {
  return (
    <>
      <div className="container max-w-full">
        <div className="hero w-full h-screen flex 2xl:gap-36 xl:gap-36 lg:gap-20 md:gap-10 justify-center sm:pt-16 xs:pt-16 xls:pt-10 2xl:pt-8 xl:pt-8 lg:pt-8 md:pt-10 mb-5 xl:flex-row 2xl:flex-row 3xl:flex-row lg:flex-row xs:flex-col xls:flex-col items-center sm:gap-5">
          <img
            src={smilehero}
            className="hero-img"
            alt=""
            style={{ width: "100%", maxWidth: "700px" }}
          />

          <div className="hero-content 2xl:pt-10 xl:pt-10 lg:pt-10 md:pt-10 sm:pt-10 lg:w-96 md:w-72 sm:w-72 xs:w-72 xls:w-72 xls:mb-10 xl:mb-0 xs:mb-10">
            <h1 className="text-BlueBlackColor font-extrabold text-7xl mb-5">
              Dental Health
            </h1>
            <p className="text-sm mb-3">
              Regular dental clinic visits are crucial for early detection and
              treatment of oral issues, including cavities and gum disease,
            </p>
            <div className="hero-buttons flex justify-between">
              <Link
                to="/appointment"
                className="bg-BlueBlackColor text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-black"
              >
                Book Now
              </Link>
              <Link
                to="/about"
                className="bg-transparent text-BlueBlackColor text-xs font-bold px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="sth xl:flex xls:flex md:flex sm:flex xs:flex 2xs:flex 3xs:grid 3xs:grid-cols-2 3xs:gap-5 xls:px-5  lg:justify-between md:justify-center sm:justify-center  2xs:gap-24 xls:gap-32 xs:gap-28 sm:gap-40 md:gap-52 xl:px-64 lg:px-44 xs:px-5 xl:mb-20 xs:mb-10 ">
          <div className="col flex w-4 xl:gap-3 2xs:gap-1">
            <h1 className="text-BlueBlackColor font-extrabold lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl xls:text-3xl 2xs:text-xl">
              20
            </h1>
            <div className="row lg:text-base md:text-sm sm:text-sm xs:text-xs xls:text-xs">
              Years Experience
            </div>
          </div>
          <div className="col flex w-4 gap-3">
            <h1 className="text-BlueBlackColor font-extrabold lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl 2xs:text-xl xls:text-3xl">
              50K
            </h1>
            <div className="row lg:text-base md:text-sm sm:text-sm xs:text-xs xls:text-xs">
              Satisfied Customers
            </div>
          </div>
          <div className="col flex w-4 gap-3">
            <h1 className="text-BlueBlackColor font-extrabold lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl 2xs:text-xl xls:text-3xl">
              20
            </h1>
            <div className="row lg:text-base md:text-sm sm:text-sm xs:text-xs xls:text-xs">
              Years Experience
            </div>
          </div>
        </div>
        <div
          className="middle mb-20"
          style={{
            backgroundImage: `url(${smile})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingLeft: "300px",
            padding: "40px",
          }}
        >
          <div className="row flex justify-left px-16 xl:gap-36 lg:gap-10 sm:gap-5 md:px-0 sm:px-10 xl:flex-row xs:flex-col xls:flex-col xls:gap-7">
            <div className="col lg:w-96 md:w-72 sm:w-96 pt-5 xl:px-0 xs:px-7 xls:px-7">
              <h2 className="text-4xl mb-5 font-semibold text-white">
                Get A <span className="text-BlueBlackColor">Beautiful</span>{" "}
                Smile
              </h2>
              <p className="text-md mb-5 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                sapiente?Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
              <Link
                to="/about"
                className="bg-BlueBlackColor text-white text-xs font-bold px-5 py-2 rounded-lg hover:bg-black"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="service mb-20">
          <h2 className="text-4xl mb-5 font-semibold text-center">
            Services <span className="text-BlueBlackColor">We Offer</span>
          </h2>
          <div className="row md:flex xl:gap-10 lg:gap-5 md:gap-5 justify-center lg:px-0 md:px-10 sm:grid sm:grid-cols-2 sm:px-10 sm:gap-5 xs:grid xs:grid-cols-2 xs:px-7 xs:gap-5  xls:grid xls:grid-cols-2 xls:px-7 xls:gap-5">
            <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 xl:w-60 lg:w-52 md:w-48 sm:w-52 xs:w-44 2xs:w-36 3xs:w-32 rounded-lg">
              <img src="./braces.png" className="w-10" alt="" />
              <h3 className="font-bold text-sm">Teeth Straightening</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
            </div>
            <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 xl:w-60 lg:w-52 md:w-48 sm:w-52 xs:w-44 2xs:w-36 3xs:w-32 rounded-lg">
              <img src="./implant.png" className="w-10" alt="" />
              <h3 className="font-bold text-sm">Dental Implant</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
            </div>
            <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 xl:w-60 lg:w-52 md:w-48 sm:w-52 xs:w-44 2xs:w-36 3xs:w-32 rounded-lg">
              <img src="./teeth-cleaning.png" className="w-10" alt="" />
              <h3 className="font-bold text-sm">Bleaching</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
            </div>
            <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 xl:w-60 lg:w-52 md:w-48 sm:w-52 xs:w-44 2xs:w-36 3xs:w-32 rounded-lg">
              <img src="./dental-surgery.png" className="w-10" alt="" />
              <h3 className="font-bold text-sm">Oral Surgery</h3>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing{" "}
              </p>
            </div>
          </div>
          <div className="seeMore">
            <Link
              className="flex gap-2 justify-end xl:px-56 lg:px-20 md:px-10 sm:px-24 xs:px-7 xls:px-7 mt-5 text-sm font-bold text-BlueBlackColor"
              to="/services"
            >
              See more <img src="./arrow.png" alt="" className="w-6" />
            </Link>
          </div>
        </div>
        <div className="appointment bg-GrayColor mb-10 py-5 xl:px-56 w-full lg:px-20 md:px-10 sm:px-5 xls:px-10">
          <div className="row flex xl:gap-36 lg:gap-24 ">
            <div className="col sm:pt-5 md:pt-0">
              <img src="./designs.png" alt="" />
            </div>
            <div className="col xl:pt-14 lg:pt-7 xl:px-0 xs:px-10 ">
              <h2 className="text-4xl mb-5 font-semibold text-BlueBlackColor">
                Online Appointment
              </h2>
              <p className="text-xs mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                sapiente?Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas, sapiente?Lorem ipsum dolor
                sit amet. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas, sapiente?Lorem ipsum dolor sit amet.
              </p>
              <Link
                to="/appointment"
                className="bg-transparent text-BlueBlackColor text-xs font-bold px-5 py-2 rounded-lg border border-BlueBlackColor  hover:bg-DarkGray"
              >
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
        <Reviews />
        <Outlet />
      </div>
    </>
  );
}
export default Home;
