import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../context/Context";

const Appointment = () => {
  const [user, setUser] = useState(null);
  const { userId, isLoggedIn } = useContext(MyContext);
  const [treatment, setTreatment] = useState("");
  const [doctor, setDoctor] = useState("");
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

  const handleBookAppointment = async () => {
    if (!isLoggedIn) {
      setMessage("Please log in first.");
      return;
    }

    const scheduledDateTime = new Date(scheduledTime);
    const formattedDate = scheduledDateTime.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const time = scheduledDateTime.toTimeString().slice(0, 5);

    try {
      const response = await axios.post("http://localhost:7000/api/booked", {
        treatment,
        doctor,
        scheduledDate: formattedDate,
        scheduledTime: time,
        approved: false,
        userId,
        userName: user.name,
        userImage: user.imageUrl,
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
        {isLoggedIn && user && (
          <p className="text-gray-700 mb-4">Welcome, {user.name}</p>
        )}
        <select
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className="block w-full px-3 py-2 border rounded mb-4 focus:outline-none"
        >
          <option value="">Select Treatment</option>
          <option value="Treatment1">Treatment 1</option>
          <option value="Treatment2">Treatment 2</option>
          <option value="Treatment3">Treatment 3</option>
        </select>
        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className="block w-full px-3 py-2 border rounded mb-4 focus:outline-none"
        >
          <option value="">Select Doctor</option>
          <option value="Doctor1">Doctor 1</option>
          <option value="Doctor2">Doctor 2</option>
          <option value="Doctor3">Doctor 3</option>
          <option value="Doctor4">Doctor 4</option>
          <option value="Doctor5">Doctor 5</option>
          <option value="Doctor6">Doctor 6</option>
        </select>
        <input
          type="datetime-local"
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
          className="block w-full px-3 py-2 border rounded mb-4 focus:outline-none"
        />
        <button
          onClick={handleBookAppointment}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>
        <p className="text-red-500 mt-4">{message}</p>
      </div>
    </div>
  );
};

export default Appointment;
