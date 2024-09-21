import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

const BookedAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteAppointmentId, setDeleteAppointmentId] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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

  useEffect(() => {
    const today = new Date();

    const outdatedAppointments = appointments.filter(
      (appointment) => new Date(appointment.scheduledDate) < today
    );

    outdatedAppointments.forEach((appointment) => {
      handleCancelAppointment(appointment._id);
    });
  }, [appointments]);

  const openDeleteModal = (id) => {
    setDeleteAppointmentId(id);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
    setDeleteAppointmentId(null);
  };

  const handleDeleteSubmit = async () => {
    if (deleteAppointmentId) {
      try {
        await axios.delete(
          `https://don-server-75q6.onrender.com/api/booked/${deleteAppointmentId}`
        );

        setAppointments((prevAppointments) =>
          prevAppointments.filter(
            (appointment) => appointment._id !== deleteAppointmentId
          )
        );
      } catch (error) {
        console.error("Error deleting appointment: ", error);
      } finally {
        closeDeleteModal();
      }
    }
  };

  return (
    <div className="md:ml-64">
      <Navbar />
      <h1 className="text-center text-BlueBlackColor mt-20 font-extrabold text-4xl">
        Appointments
      </h1>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-gray-900 mt-20"></div>
        </div>
      ) : (
        <div className="bg-white p-8">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-5 px-3 mx-20 py-2 border border-gray-300 rounded-md"
          />
          <div style={{ overflowX: "auto" }}>
            <table className="min-w-[600px] sm:w-full xl:w-4/5 xl:mx-auto table-auto border-collapse border-spacing-4">
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
                    Status
                  </th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments
                  .filter((appointment) =>
                    appointment.userName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((appointment) => (
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
                          onClick={() => openDeleteModal(appointment._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {deleteModalVisible && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white p-8 rounded w-96">
                <div className="flex justify-between px-5 py-5">
                  <h2 className="font-bold text-lg">Delete Appointment</h2>
                  <img
                    src="./close.png"
                    alt=""
                    onClick={closeDeleteModal}
                    className="cursor-pointer w-5 h-5"
                  />
                </div>
                <hr />
                <div className="md:px-14 py-10 sm:px-10 xs:px-10">
                  <h2>Are you sure you want to delete this appointment?</h2>
                  <div className="flex justify-between mt-9">
                    <div>
                      <button
                        className="bg-transparent text-BlueBlackColor text-sm font-bold px-5 py-2 rounded-lg border border-BlueBlackColor hover:bg-DarkGray"
                        onClick={handleDeleteSubmit}
                      >
                        Yes
                      </button>
                    </div>
                    <div>
                      <button
                        className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 rounded-lg hover:bg-black"
                        onClick={closeDeleteModal}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookedAppointments;
