import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/navbar";

function NewAppointment() {
  const [userId] = useState(uuidv4());
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [treatment, setTreatment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result;
        setImageUrl(url);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !scheduledDate ||
      !scheduledTime ||
      !treatment ||
      !doctor ||
      !userName ||
      !phoneNo ||
      !imageUrl
    ) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const scheduledDateTime = new Date(`${scheduledDate}T${scheduledTime}`);
    const formattedDate = scheduledDateTime.toLocaleString();

    try {
      const response = await axios.post("http://localhost:7000/api/booked", {
        treatment,
        doctor,
        scheduledDate,
        scheduledTime,
        approved: false,
        userId,
        userName,
        userImage: imageUrl,
        phoneNo,
      });

      setMessage("Appointment added successfully!");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-28 mx-auto w-[400px] flex flex-col items-center xs:w-[300px]">
        <h1 className="font-bold text-BlueBlackColor text-4xl mb-9 xs:text-2xl">
          Add New Appointment
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="name" className="font-bold text-sm mb-3">
              Patient Name:
            </label>
            <input
              type="text"
              placeholder="Patient Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              required
            />
          </div>
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="phone" className="font-bold text-sm mb-3">
              Phone Number:
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              required
            />
          </div>
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="treatment" className="font-bold text-sm mb-3">
              Treatment:
            </label>
            <select
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              required
            >
              <option value="">Select Treatment</option>
              <option value="Treatment1">Treatment 1</option>
              <option value="Treatment2">Treatment 2</option>
              <option value="Treatment3">Treatment 3</option>
            </select>
          </div>
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="doctor" className="font-bold text-sm mb-3">
              Doctor:
            </label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              required
            >
              <option value="">Select Doctor</option>
              <option value="Doctor1">Doctor 1</option>
              <option value="Doctor2">Doctor 2</option>
              <option value="Doctor3">Doctor 3</option>
              <option value="Doctor4">Doctor 4</option>
              <option value="Doctor5">Doctor 5</option>
              <option value="Doctor6">Doctor 6</option>
            </select>
          </div>
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="date" className="font-bold text-sm mb-3">
              Appointment Date:
            </label>
            <input
              type="date"
              value={scheduledDate}
              onChange={(e) => setScheduledDate(e.target.value)}
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              required
            />
          </div>
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="time" className="font-bold text-sm mb-3">
              Appointment Time:
            </label>
            <input
              type="time"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              required
            />
          </div>
          <div className="input-group flex flex-col mb-5">
            <label htmlFor="file" className="font-bold text-sm mb-3">
              Upload Image:
            </label>
            <input
              type="file"
              onChange={handleFileUpload}
              className="border rounded-md w-96 px-3 py-1 text-sm xs:w-72"
              required
            />
          </div>
          <div className="input-group flex flex-col mb-5">
            <button
              type="submit"
              className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 rounded-lg w-96 hover:bg-black xs:w-72"
            >
              Add Appointment
            </button>
          </div>
        </form>
        {message && <p className="text-red-500 text-center mt-4">{message}</p>}
      </div>
    </>
  );
}

export default NewAppointment;
