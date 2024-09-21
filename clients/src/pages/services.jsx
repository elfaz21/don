import smilehero from "../assets/smile-hero.png";

function Services() {
  return (
    <>
      <div className="services">
        <div className="blog-hero mb-10">
          <h1 className="text-center text-white font-extrabold py-36 md:px-96  text-6xl">
            Services
          </h1>
        </div>
        <div className="services-list xl:px-52 lg:px-16 md:px-10 sm:px-5 xls:px-5 xs:px-5">
          <hr />
          <div className="row flex justify-between mb-5 mt-5 px-2 group ">
            <div className="col sm:w-[500px] xls:w-[400px] xs:w-[300px] ">
              <h2 className="lg:text-5xl md:text-4xl sm:text-3xl xls:text-2xl xs:text-2xl mb-5 font-semibold sm:pt-10 xls:pt-5 group-hover:pt-0">
                Teeth <span className="text-BlueBlackColor">Straightening</span>
              </h2>
              <p className="lg:text-sm md:text-xs sm:text-xs xls:text-xs xs:text-xs lg:pt-28 md:pt-12 text-BlueBlackColor lg:px-0 md:px-5 sm:px-5 hidden group-hover:block">
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis qui ut provident unde repudiandae? Earum amet alias unde
                tempora architecto! ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos deserunt praesentium aperiam qui amet quidem
                dicta repellendus? Cum, magnam mollitia!
              </p>
            </div>
            <div className="col">
              <img
                src=".data:image/jpeg;base64,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"
                className="w-[200px] lg:group-hover:w-[400px] md:group-hover:w-[350px] sm:group-hover:w-[300px] xls:hidden xs:hidden rounded-lg"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="row flex justify-between mb-5 mt-5 px-2 group">
            <div className="col sm:w-[500px] xls:w-[400px] xs:w-[300px]">
              <h2 className="lg:text-5xl md:text-4xl sm:text-3xl xls:text-2xl xs:text-2xl mb-5 font-semibold sm:pt-10 xls:pt-5 group-hover:pt-0">
                Dental <span className="text-BlueBlackColor">Implant</span>
              </h2>
              <p className="lg:text-sm md:text-xs sm:text-xs xls:text-xs xs:text-xs lg:pt-28 md:pt-12 text-BlueBlackColor lg:px-0 md:px-5 sm:px-5 hidden group-hover:block">
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis qui ut provident unde repudiandae? Earum amet alias unde
                tempora architecto! ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos deserunt praesentium aperiam qui amet quidem
                dicta repellendus? Cum, magnam mollitia!
              </p>
            </div>
            <div className="col">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4qauZZMfmjrGGJrzpXX2NZ1bHF-ijWL65CfTYyReOCxK3mVWIL4hGCLb8Ql6GF6RD9Q&usqp=CAU"
                className="w-[200px] lg:group-hover:w-[400px] md:group-hover:w-[350px] sm:group-hover:w-[300px] xls:hidden xs:hidden rounded-lg"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="row flex justify-between mb-5 mt-5 px-2 group">
            <div className="col sm:w-[500px] xls:w-[400px] xs:w-[300px]">
              <h2 className="lg:text-5xl md:text-4xl sm:text-3xl xls:text-2xl xs:text-2xl mb-5 font-semibold sm:pt-10 xls:pt-5 group-hover:pt-0">
                Dental <span className="text-BlueBlackColor">Bleaching</span>
              </h2>
              <p className="lg:text-sm md:text-xs sm:text-xs xls:text-xs xs:text-xs lg:pt-28 md:pt-12 text-BlueBlackColor lg:px-0 md:px-5 sm:px-5 hidden group-hover:block">
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis qui ut provident unde repudiandae? Earum amet alias unde
                tempora architecto! ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos deserunt praesentium aperiam qui amet quidem
                dicta repellendus? Cum, magnam mollitia!
              </p>
            </div>
            <div className="col">
              <img
                src="https://img.freepik.com/free-photo/dentist-with-smile_144627-886.jpg"
                className="w-[200px] lg:group-hover:w-[400px] md:group-hover:w-[350px] sm:group-hover:w-[300px] xls:hidden xs:hidden rounded-lg"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="row flex justify-between mb-5 mt-5 px-2 group">
            <div className="col sm:w-[500px] xls:w-[400px] xs:w-[300px]">
              <h2 className="lg:text-5xl md:text-4xl sm:text-3xl xls:text-2xl xs:text-2xl mb-5 font-semibold sm:pt-10 xls:pt-5 group-hover:pt-0">
                Oral <span className="text-BlueBlackColor">Surgery</span>
              </h2>
              <p className="lg:text-sm md:text-xs sm:text-xs xls:text-xs xs:text-xs lg:pt-28 md:pt-12 text-BlueBlackColor lg:px-0 md:px-5 sm:px-5 hidden group-hover:block">
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis qui ut provident unde repudiandae? Earum amet alias unde
                tempora architecto! ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos deserunt praesentium aperiam qui amet quidem
                dicta repellendus? Cum, magnam mollitia!
              </p>
            </div>
            <div className="col">
              <img
                src={smilehero}
                className="w-[200px] lg:group-hover:w-[400px] md:group-hover:w-[350px] sm:group-hover:w-[300px] xls:hidden xs:hidden rounded-lg"
                alt=""
              />
            </div>
          </div>
          <hr />
          <div className="row flex justify-between mb-5 mt-5 px-2 group">
            <div className="col sm:w-[500px] xls:w-[400px] xs:w-[300px]">
              <h2 className="lg:text-5xl md:text-4xl sm:text-3xl xls:text-2xl xs:text-2xl mb-5 font-semibold sm:pt-10 xls:pt-5 group-hover:pt-0">
                Dental <span className="text-BlueBlackColor">consultation</span>
              </h2>
              <p className="lg:text-sm md:text-xs sm:text-xs xls:text-xs xs:text-xs lg:pt-28 md:pt-12 text-BlueBlackColor lg:px-0 md:px-5 sm:px-5 hidden group-hover:block">
                Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Omnis qui ut provident unde repudiandae? Earum amet alias unde
                tempora architecto! ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos deserunt praesentium aperiam qui amet quidem
                dicta repellendus? Cum, magnam mollitia!
              </p>
            </div>
            <div className="col">
              <img
                src={smilehero}
                className="w-[200px] lg:group-hover:w-[400px] md:group-hover:w-[350px] sm:group-hover:w-[300px] xls:hidden xs:hidden rounded-lg"
                alt=""
              />
            </div>
          </div>
          <hr className="mb-10" />
        </div>
      </div>
    </>
  );
}
export default Services;
