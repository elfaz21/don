function About() {
  return (
    <>
      <div className="about">
        <div className="about-hero mb-10">
          <h1 className="text-center text-white font-extrabold py-36 px-96 lg:px-60 md:px-10 md:text-6xl sm:px-1 sm:text-3xl xs:px-1 xls:px-1">
            ABOUT DON DENTAL CLINIC
          </h1>
        </div>
        <div className="row flex mb-10 lg:gap-40 lg:px-40 md:gap-16 md:px-16 sm:flex-col xs:flex-col xls:flex-col md:flex-row">
          <div className="col md:pt-10 sm:pt-0 xs:pt-0 xls:pt-0">
            <h2 className="text-3xl mb-5 font-semibold text-center text-BlueBlackColor">
              Vision
              <span class="block mx-auto w-10 h-0.5 mt-1 bg-BlueBlackColor"></span>
            </h2>
            <p className="mb-5 text-sm font-bold text-center">
              DON envisions to keep smile on you face
            </p>
            <h2 className="text-3xl mb-5  text-center font-semibold text-BlueBlackColor">
              Mission
              <span class="block mx-auto w-10 h-0.5 mt-1 bg-BlueBlackColor"></span>
            </h2>
            <p className="mb-5 text-sm sm:px-5 xs:px-5 xls:px-5">
              Empowering smiles through compassionate care and expertise,
              ensuring every visit is a step towards optimal oral health and
              confidence."
            </p>
          </div>
          <div className="col sm:px-5 xs:px-5 xls:px-5">
            <h2 className="text-3xl mb-5 font-semibold text-center text-BlueBlackColor">
              Our Story{" "}
              <span class="block mx-auto w-10 h-0.5 mt-1 bg-BlueBlackColor"></span>
            </h2>
            <p className="mb-2 text-sm ">
              At DON Dental Clinic, our journey began with a simple yet profound
              vision: to redefine dental care. What started as a dream soon
              turned into a reality as we embarked on a mission to provide
              unparalleled service to our patients.
            </p>
            <p className="mb-2 text-sm">
              Driven by a passion for excellence and a commitment to innovation,
              we have assembled a team of dedicated professionals who share a
              common goal: to deliver exceptional care in a welcoming and
              comforting environment.
            </p>
            <p className="mb-2 text-sm">
              With each smile we transform and each life we touch, our
              dedication to quality and compassion only grows stronger. At DON
              Dental Clinic, we are not just creating healthy smiles; we are
              building lasting relationships based on trust and respect.
            </p>
            <p className="mb-2 text-sm">
              Join us on this incredible journey towards a brighter, healthier
              future. Welcome to DON Dental Clinic—where your smile is our
              priority.
            </p>
          </div>
        </div>
        <div className="row">
          <h2 className="text-3xl mb-5 font-semibold text-center text-BlueBlackColor">
            Our Doctors
            <span class="block mx-auto w-10 h-0.5 mt-2 bg-BlueBlackColor"></span>
          </h2>
          <div className="row flex justify-center md:gap-10 lg:gap-20 sm:gap-3 xs:gap-3 xls:gap-3 mb-10 xs:flex-col xls:flex-col sm:flex-row items-center">
            <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 lg:w-60 md:w-52  sm:w-48 sm:px-2 rounded-lg">
              <img src="./dr2.png" className="w-40 mb-3" alt="" />
              <h3 className="font-extrabold text-base mb-3">Dr. Kirubel</h3>
              <p className="text-sm md:px-9 sm:px-2">
                Lorem ipsum dolor sit amet 
              </p>
            </div>
            <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 lg:w-60 md:w-52  sm:w-48 sm:px-2 rounded-lg">
              <img src="./dr3.png" className="w-40 mb-3" alt="" />
              <h3 className="font-extrabold text-base mb-3">Dr. Selam</h3>
              <p className="text-sm md:px-9 sm:px-2">
                Lorem ipsum dolor sit amet 
              </p>
            </div>
            <div className="col shadow-lg  text-center flex flex-col items-center px-5 py-3 lg:w-60 md:w-52 sm:w-48 sm:px-2 rounded-lg">
              <img src="./dr.png" className="w-40 mb-3" alt="" />
              <h3 className="font-extrabold text-base mb-3">Dr. Amy</h3>
              <p className="text-sm md:px-9 sm:px-2">
                Lorem ipsum dolor sit amet 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
