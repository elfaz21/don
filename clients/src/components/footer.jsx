import { Outlet, Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="row flex pt-20 pb-10 xl:px-40 lg:px-20 xs:items-center xs:justify-center md:px-10 sm:px-5 xs:grid xls:grid xs:grid-cols-2 xls:grid-cols-2 xls:px-5 xs:px-5 justify-between">
          <div className="col">
            <div className="logo">
              <Link className="flex" to="/">
                <img src="./logo.png" className="w-14" alt="" />
                <h1 className="text-BlueBlackColor text-sm font-bold pt-3">
                  Don Dental Clinic
                </h1>
              </Link>
            </div>
          </div>
          <div className="col lg:w-80 md:w-64 sm:w-56 flex flex-col items-center">
            <h3 className="text-center text-lg font-bold">Get In Touch</h3>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              sapiente?Lorem ipsum
            </p>
            <Link
              to="/contact"
              className="bg-transparent text-BlueBlackColor text-xs font-bold px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray"
            >
              Contact Us
            </Link>
          </div>
          <div className="col xs:col-span-2 xs:mt-5 xls:col-span-2 xls:mt-5">
            <h3 className="text-center font-bold text-lg mb-3">Follow Us</h3>
            <div className="social flex xs:justify-center xls:justify-center gap-5">
              <a href="https://www.facebook.com" target="_blank">
                <img src="./facebook.png" className="w-5" alt="Facebook" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src="./instagram.png" className="w-5" alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <img src="./linkedin.png" className="w-5" alt="LinkedIn" />
              </a>
              <a href="https://www.whatsapp.com" target="_blank">
                <img src="./whatsapp.png" className="w-5" alt="WhatsApp" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <img src="./twitter.png" className="w-5" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
        <hr className="hr mb-3" />
        <p className="text-center text-xs pb-3">
          {" "}
          Copyright {currentYear}. All rights reserved by Don Dental Clinic
        </p>
        <Outlet />
      </footer>
    </>
  );
}

export default Footer;
