import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MyContext } from "../context/Context";

function Appointment() {
  const [step, changeStep] = useState(1);
  const [user, setUser] = useState(null);
  const { userId, isLoggedIn } = useContext(MyContext);
  const [treatment, setTreatment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/api/users/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchData();
  }, [userId]);

  const handleBookAppointment = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!isLoggedIn) {
      setMessage("Please log in first.");
      return;
    }

    if (!scheduledDate || !scheduledTime || !treatment || !doctor) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const scheduledDateTime = new Date(`${scheduledDate}T${scheduledTime}`);
    const formattedDate = scheduledDateTime.toLocaleString();

    try {
      const response = await axios.post("http://localhost:7000/api/booked", {
        treatment,
        doctor,
        scheduledDateTime: formattedDate,
        scheduledDate,
        scheduledTime,
        approved: false,
        userId: userId,
        userName: user.name,
        userImage: user.imageUrl,
        phoneNo: user.phoneNo,
      });

      setMessage("Appointment added successfully!"); // Update message state
      changeStep(3); // Update step to show the success message
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };
  const nextStep = (e) => {
    e.preventDefault();
    changeStep(step + 1);
  };

  const previousStep = (e) => {
    e.preventDefault();
    changeStep(step - 1);
  };

  return (
    <>
      <div className="getAppointment lg:mt-28 sm:mt-16 mb-20">
        <div className="row flex xl:gap-40 lg:gap-20 lg:flex-row sm:flex-col-reverse xs:flex-col-reverse xls:flex-col-reverse items-center justify-center">
          <div className="col pt-10 md:w-80 3xs:w-72">
            <h2 className="text-3xl mb-5 font-semibold text-center text-BlueBlackColor">
              Book Appointment
              <span className="block mx-auto w-36 h-0.5 mt-2 bg-BlueBlackColor"></span>
            </h2>
            <div className="buttons my-10">
              <hr className="hr" />
              <ul className="flex -mt-8 -ml-2 justify-between">
                <li className="text-center text-sm">
                  <div>Service</div>
                  <div className="rounded-full w-6 h-6  flex items-center justify-center">
                    <span
                      className={`w-3 h-3 ${
                        step === 1
                          ? "bg-BlueBlackColor"
                          : "bg-white border border-BlueBlackColor"
                      }  rounded-full`}
                    ></span>
                  </div>
                </li>
                <li className="text-center text-sm">
                  <div>Time</div>
                  <div className="rounded-full w-6 h-6  flex items-center justify-center">
                    <span
                      className={`w-3 h-3 ${
                        step === 2
                          ? "bg-BlueBlackColor"
                          : "bg-white border border-BlueBlackColor"
                      }  rounded-full`}
                    ></span>
                  </div>
                </li>
                <li className="text-center text-sm">
                  <div>Done</div>
                  <div className="rounded-full w-6 h-6  flex items-center justify-center">
                    <span
                      className={`w-3 h-3 ${
                        step === 3
                          ? "bg-BlueBlackColor"
                          : "bg-white border border-BlueBlackColor"
                      }  rounded-full`}
                    ></span>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-sm mb-5">Please Select Service</p>
            <form>
              {step === 1 && (
                <>
                  <div className="input-group flex flex-col gap-2 mb-5">
                    <label className="text-xs font-semibold">Treatment</label>
                    <select
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="border rounded-lg py-1 md:w-80 3xs:w-72 text-xs"
                    >
                      <option value="Teeth">Teeth Straightening</option>
                      <option value="Dental Implant">Dental Implant</option>
                      <option value="Bleaching">Bleaching</option>
                      <option value="Oral Surgery">Oral Surgery</option>
                    </select>
                  </div>
                  <div className="input-group flex flex-col gap-2 mb-5">
                    <label className="text-xs font-semibold">Doctor</label>
                    <select
                      value={doctor}
                      onChange={(e) => setDoctor(e.target.value)}
                      className="border rounded-lg py-1 md:w-80 3xs:w-72 text-xs"
                    >
                      <option value="Dr.Amy">Dr. Amy</option>
                      <option value="Dr. Kirubel">Dr. Kirubel</option>
                      <option value="Dr. Selam">Dr. Selam</option>
                    </select>
                  </div>
                  <div className="input-group flex justify-between text-xs font-bold">
                    <button className="bg-transparent text-BlueBlackColor px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray">
                      Cancel
                    </button>
                    <button
                      className="bg-BlueBlackColor text-white px-5 py-2 rounded-lg hover:bg-black"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="input-group flex flex-col gap-2 mb-5">
                    <label className="text-xs font-semibold">
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      min={new Date().toISOString().split("T")[0]} // Set the minimum date to today
                      className="border rounded-lg py-1 md:w-80 3xs:w-72 text-xs"
                    />
                  </div>
                  <div className="input-group flex flex-col gap-2 mb-5">
                    <label className="text-xs font-semibold">
                      Appointment Time
                    </label>
                    <input
                      type="time"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                      min={new Date().toLocaleTimeString("en-GB", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      className="border rounded-lg py-1 md:w-80 3xs:w-72 text-xs"
                    />
                  </div>
                  <div className="input-group flex justify-between text-xs font-bold">
                    <button
                      className="bg-transparent text-BlueBlackColor px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray"
                      onClick={previousStep}
                    >
                      Back
                    </button>
                    <button
                      className="bg-BlueBlackColor text-white px-5 py-2 rounded-lg hover:bg-black"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <div className="input-group mb-5">{message}</div>
                  <div className="input-group flex justify-between text-xs font-bold">
                    <button
                      className="bg-transparent text-BlueBlackColor px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray"
                      onClick={previousStep}
                    >
                      Back
                    </button>
                    <button
                      className="bg-BlueBlackColor text-white px-5 py-2 rounded-lg hover:bg-black"
                      onClick={handleBookAppointment}
                    >
                      Done
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
          <div className="col">
            <img
              src="./clinic.jpg"
              className="rounded-lg w-[450px] lg:h-[540px] xs:h-[250px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
