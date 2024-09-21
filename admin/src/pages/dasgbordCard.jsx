import React, { useState, useEffect } from "react";
import axios from "axios";

const DashboardCards = () => {
  const [userCount, setUserCount] = useState(0);
  const [approvedAppointmentsCount, setApprovedAppointmentsCount] = useState(0);
  const [pendingAppointmentsCount, setPendingAppointmentsCount] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersResponse = await axios.get(
          "https://don-server-75q6.onrender.com/api/users"
        );
        setUserCount(usersResponse.data.length);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    const fetchAppointmentsData = async () => {
      try {
        const bookedResponse = await axios.get(
          "https://don-server-75q6.onrender.com/api/booked"
        );

        const approvedAppointments = bookedResponse.data.filter(
          (appointment) => appointment.approved === true
        );

        const pendingAppointments = bookedResponse.data.filter(
          (appointment) => appointment.approved === false
        );

        setApprovedAppointmentsCount(approvedAppointments.length);
        setPendingAppointmentsCount(pendingAppointments.length);
      } catch (error) {
        console.error("Error fetching appointments data: ", error);
      }
    };

    fetchUserData();
    fetchAppointmentsData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-20">
      <div className="bg-blue-200 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-4xl font-bold">{userCount}</p>
      </div>
      <div className="bg-green-200 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Approved Appointments</h2>
        <p className="text-4xl font-bold">{approvedAppointmentsCount}</p>
      </div>
      <div className="bg-yellow-200 p-4 rounded-lg">
        <h2 className="text-lg font-semibold">Pending Appointments</h2>
        <p className="text-4xl font-bold">{pendingAppointmentsCount}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
