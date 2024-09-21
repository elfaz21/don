import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../../context/Context";
import "./UserAppointments.css";

const UserAppointments = () => {
  const [userAppointments, setUserAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useContext(MyContext);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsResponse = await fetch(
          "http://localhost:7000/api/booked"
        );
        const allAppointments = await appointmentsResponse.json();

        const filteredAppointments = allAppointments.filter(
          (appointment) => appointment.userId === userId
        );

        setUserAppointments(filteredAppointments);
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  const cancelAppointment = async (appointmentId) => {
    try {
      await fetch(`http://localhost:7000/api/booked/${appointmentId}`, {
        method: "DELETE",
      });

      const updatedAppointments = userAppointments.filter(
        (appointment) => appointment._id !== appointmentId
      );
      setUserAppointments(updatedAppointments);
    } catch (error) {
      console.error("Error cancelling appointment: ", error);
    }
  };

  return (
    <div className="bg-gray-200 h-screen relative">
      {loading && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-900"></div>
        </div>
      )}
      <div className="about-hero mb-10">
        <h1 className="text-center text-white font-extrabold py-20 px-96 lg:px-60 md:px-10 md:text-6xl sm:px-1 sm:text-3xl xs:px-1 xls:px-1">
          Appointments
        </h1>
      </div>
      <div className="grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {userAppointments.map((appointment) => (
          <div
            key={appointment._id}
            className="bg-gray-100 rounded-lg shadow-md py-4 px-6 flex items-center text-black"
          >
            {appointment.userImage && (
              <img
                src={appointment.userImage}
                alt="User"
                className="w-20 h-30 rounded-lg mr-8"
              />
            )}
            <div>
              <p className="text-lg">
                <strong>Treatment:</strong> {appointment.treatment}
              </p>
              <p className="text-lg">
                <strong>Doctor:</strong> {appointment.doctor}
              </p>
              <p className="text-lg">
                <strong>Scheduled Time:</strong> {appointment.scheduledTime}
              </p>
              <p className="text-lg">
                <strong>Scheduled Date:</strong> {appointment.scheduledDate}
              </p>
              <p className="text-lg">
                <strong>Status:</strong>{" "}
                <span
                  className={`font-bold ${
                    appointment.approved ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {appointment.approved ? "Approved" : "Pending"}
                </span>
              </p>
            </div>
            {!appointment.approved && (
              <button
                className="bg-red-500 text-white px-4 py-2 ml-auto rounded hover:bg-red-600"
                onClick={() => cancelAppointment(appointment._id)}
              >
                Cancel
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAppointments;
