import React, { useState, useEffect } from "react";
import axios from "axios";

const BookedAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "https://don-server-75q6.onrender.com/api/booked"
        );
        setAppointments(response.data.reverse());
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const handleToggleApproval = async (id, currentStatus) => {
    try {
      const response = await axios.put(
        `https://don-server-75q6.onrender.com/api/booked/${id}`,
        {
          approved: !currentStatus,
        }
      );

      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === id
            ? { ...appointment, approved: !currentStatus }
            : appointment
        )
      );
    } catch (error) {
      console.error("Error toggling approval status: ", error);
    }
  };

  const handleCancelAppointment = async (id) => {
    try {
      await axios.delete(
        `https://don-server-75q6.onrender.com/api/booked/${id}`
      );

      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment._id !== id)
      );
    } catch (error) {
      console.error("Error canceling appointment: ", error);
    }
  };

  return (
    <div
      style={{ background: "white" }}
      className="sm:mx-4 xs:mx-4 xls:mx-4 overflow-x-auto"
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="bg-gray-200 p-8">
          <h1 className="text-center text-white font-extrabold text-4xl mb-10">
            Appointments
          </h1>
          <table className="min-w-[750px] sm:w-full xl:w-4/5 xl:mx-auto mt-28 table-auto border-collapse border-spacing-4">
            <thead>
              <tr className="border-b text-sm text-BlueBlackColor">
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Name
                </th>
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Phone
                </th>
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Treatment
                </th>
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Doctor
                </th>
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Scheduled Date
                </th>
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Scheduled Time
                </th>
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Booking Time
                </th>
                <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 py-2">
                  Approved
                </th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr
                  key={appointment._id}
                  className="border-b odd:bg-blue-50 text-sm text-center"
                >
                  <td className="py-2 flex items-center">
                    {appointment.userImage && (
                      <img
                        src={appointment.userImage}
                        alt="User"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    <span>{appointment.userName}</span>
                  </td>
                  <td className="py-2">{appointment.phoneNo}</td>
                  <td className="py-2">{appointment.treatment}</td>
                  <td className="py-2">{appointment.doctor}</td>
                  <td className="py-2">{appointment.scheduledDate}</td>
                  <td className="py-2">{appointment.scheduledTime}</td>
                  <td className="py-2">
                    {new Date(appointment.timestamp).toLocaleString()}
                  </td>
                  <td className="py-2">
                    <button
                      className={
                        appointment.approved
                          ? "bg-green-500 text-white px-2 rounded"
                          : "bg-red-500 text-white px-2 rounded"
                      }
                      onClick={() =>
                        handleToggleApproval(
                          appointment._id,
                          appointment.approved
                        )
                      }
                    >
                      {appointment.approved ? "Approved" : "Pending"}
                    </button>
                  </td>
                  <td className="py-2 xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5">
                    <button
                      className="bg-red-500 text-white px-2 rounded"
                      onClick={() => handleCancelAppointment(appointment._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookedAppointments;
