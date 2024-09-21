import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <div className="testimonials mb-20 px-5">
      <h2 className="text-4xl mb-5 font-semibold text-center">
        What our Clients{" "}
        <span className="text-BlueBlackColor">are saying...</span>
      </h2>
      <div className="row flex justify-center lg:gap-16 md:gap-5 sm:gap-5 xs:gap-5 md:flex-row sm:flex-col items-center xs:flex-col xls:flex-col xls:gap-5">
        <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 lg:w-60 md:w-52 sm:w-52 xs:w-52 xls:w-52 rounded-lg">
          <img
            src="./testimonial.png"
            className="rounded-full w-24 h-28 mb-3"
            alt=""
          />
          <h3 className="text-sm font-bold mb-1">Abrham</h3>
          <p className="text-xs">
            Testimonial text goes here. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="stars flex mt-3">
            {[...Array(5)].map((star, index) => (
              <FontAwesomeIcon
                icon={faStar}
                key={index}
                className="text-yellow-500"
              />
            ))}
          </div>
        </div>

        <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 lg:w-60 md:w-52 sm:w-52 xs:w-52 xls:w-52 rounded-lg">
          <img
            src="data:image/jpeg;base64,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"
            className="rounded-full w-24 h-28 mb-3"
            alt=""
          />
          <h3 className="text-sm font-bold mb-1">Tihitna</h3>
          <p className="text-xs">
            Testimonial text goes here. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="stars flex mt-3">
            {[...Array(3)].map((star, index) => (
              <FontAwesomeIcon
                icon={faStar}
                key={index}
                className="text-yellow-500"
              />
            ))}
          </div>
        </div>

        <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 lg:w-60 md:w-52 sm:w-52 xs:w-52 xls:w-52 rounded-lg">
          <img
            src="data:image/jpeg;base64,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"
            className="rounded-full w-24 h-28 mb-3"
            alt=""
          />
          <h3 className="text-sm font-bold mb-1">Mahlet</h3>
          <p className="text-xs">
            Testimonial text goes here. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div className="stars flex mt-3">
            {[...Array(4)].map((star, index) => (
              <FontAwesomeIcon
                icon={faStar}
                key={index}
                className="text-yellow-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
