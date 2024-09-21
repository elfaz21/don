import Navbar from "../components/navbar";
import { useState } from "react";

function Appointments() {
  const [show, addShow] = useState();
  const [edit, addEdit] = useState();
  const [deleted, addDelete] = useState();
  const appointments = [
    {
      name: "Abebech",
      address: "+2519443568",
      date: "Sep 10, 2024",
      time: "Afternoon",
      doctor: "Dr. Amy",
    },
    {
      name: "John Doe",
      address: "+251912345678",
      date: "Sep 11, 2024",
      time: "Morning",
      doctor: "Dr. Smith",
    },
  ];

  const showAppointment = (appointment) => {
    addShow(appointment);
  };
  const EditAppointment = (appointment) => {
    addEdit(appointment);
  };
  const DeleteAppointment = (appointment) => {
    addDelete(appointment);
  };
  const close = () => {
    addShow();
    addEdit();
    addDelete();
  };
  return (
    <>
      <div className="sm:mx-4 xs:mx-4 xls:mx-4 overflow-x-auto">
        <table className="min-w-[750px] sm:w-full xl:w-4/5 xl:mx-auto mt-28 table-auto border-collapse border-spacing-4">
          <thead>
            <tr className="border-b text-sm text-BlueBlackColor">
              <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xls:px-5 xs:px-5 py-2">
                Patient Name
              </th>
              <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xls:px-5 xs:px-5 py-2">
                Patient Address
              </th>
              <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xls:px-5 xs:px-5 py-2">
                Appointment Date
              </th>
              <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xls:px-5 xs:px-5 py-2">
                Appointment Time
              </th>
              <th className="xl:px-10 lg:px-5 md:px-5 sm:px-5 xls:px-5 xs:px-5 py-2">
                Doctor
              </th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr
                key={index}
                className="border-b odd:bg-blue-50 text-sm text-center"
              >
                <td className="py-2">{appointment.name}</td>
                <td className="py-2">{appointment.address}</td>
                <td className="py-2">{appointment.date}</td>
                <td className="py-2">{appointment.time}</td>
                <td className="py-2">{appointment.doctor}</td>
                <td className="py-2 xl:px-10 lg:px-5 md:px-5 sm:px-5 xs:px-5 xls:px-5">
                  <div className="row flex gap-2">
                    <img
                      src="./show.png"
                      className="w-4 cursor-pointer"
                      alt=""
                      onClick={() => showAppointment(appointment)}
                    />
                    <img
                      src="./edit.png"
                      className="w-4 cursor-pointer"
                      alt=""
                      onClick={() => EditAppointment(appointment)}
                    />
                    <img
                      src="./delete.png"
                      className="w-4 cursor-pointer"
                      alt=""
                      onClick={() => DeleteAppointment(appointment)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={`fixed bg-white xs:top-1/2 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:-translate-y-1/2 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2  md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 xl:top-24 xl:left-1/3 xl:transform-none xl:-translate-x-0 xl:-translate-y-0 shadow-lg rounded-lg xls:top-1/2 xls:left-1/2 xls:transform xls:-translate-x-1/2 xls:-translate-y-1/2 ${
          show ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between px-5 py-5 xs:px-10 ">
          <h2 className="font-bold text-lg">Appointment</h2>
          <img
            src="./close.png"
            alt=""
            onClick={close}
            className="cursor-pointer  w-5 h-5"
          />
        </div>
        <hr />
        <div className="row px-32 py-10 overflow-y-auto md:h-[400px] sm:h-[400px] lg:h-[500px] lg:overflow-auto xls:h-[350px] xls:px-10 xs:h-[350px] xs:px-10">
          <h3 className="text-sm font-bold text-BlueBlackColor">
            Patient Name:
          </h3>
          <p className="px-20 mb-3">{show ? show.name : ""}</p>
          <h3 className="text-sm font-bold text-BlueBlackColor">
            Patient Address:
          </h3>
          <p className="px-20 mb-3">{show ? show.address : ""}</p>
          <h3 className="text-sm font-bold text-BlueBlackColor">
            Appointment Date:
          </h3>
          <p className="px-20 mb-3">{show ? show.date : ""}</p>
          <h3 className="text-sm font-bold text-BlueBlackColor">
            Appointment Time:
          </h3>
          <p className="px-20 mb-3">{show ? show.time : ""}</p>
          <h3 className="text-sm font-bold text-BlueBlackColor">Doctor:</h3>
          <p className="px-20 mb-3">{show ? show.doctor : ""}</p>
        </div>
      </div>
      <div
        className={`fixed bg-white xs:top-1/2 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:-translate-y-1/2 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2  md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 xl:top-24 xl:left-1/3 xl:transform-none xl:-translate-x-0 xl:-translate-y-0 shadow-lg rounded-lg xls:top-1/2 xls:left-1/2 xls:transform xls:-translate-x-1/2 xls:-translate-y-1/2 ${
          edit ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between px-5 py-5 xs:px-10">
          <h2 className="font-bold text-lg">Edit Appointment</h2>
          <img
            src="./close.png"
            alt=""
            onClick={close}
            className="cursor-pointer  w-5 h-5"
          />
        </div>
        <hr />
        <div className="row px-24 py-10 overflow-y-scroll md:h-[400px] sm:h-[400px] lg:h-[500px] lg:overflow-auto xls:h-[350px] xls:px-10 xs:h-[350px] xs:px-10">
          <form action="">
            <div className="input-group flex flex-col mb-3">
              <label htmlFor="name" className="font-bold text-sm mb-1">
                Patient Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={edit ? edit.name : ""}
                className="border rounded-md w-72 px-3 py-1 text-sm"
              />
            </div>
            <div className="input-group flex flex-col mb-3">
              <label htmlFor="address" className="font-bold text-sm mb-1">
                Patient Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={edit ? edit.address : ""}
                className="border rounded-md w-72 px-3 py-1 text-sm"
              />
            </div>
            <div className="input-group flex flex-col mb-3">
              <label htmlFor="date" className="font-bold text-sm mb-1">
                Appointment Date:
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={edit ? edit.date : ""}
                className="border rounded-md w-72 px-3 py-1 text-sm"
              />
            </div>
            <div className="input-group flex flex-col mb-3">
              <label htmlFor="time" className="font-bold text-sm mb-1">
                Appointment Time:
              </label>
              <input
                type="text"
                id="time"
                name="time"
                value={edit ? edit.time : ""}
                className="border rounded-md w-72 px-3 py-1 text-sm"
              />
            </div>
            <div className="input-group flex flex-col mb-3">
              <label htmlFor="doctor" className="font-bold text-sm mb-1">
                Doctor:
              </label>
              <input
                type="text"
                id="doctor"
                name="doctor"
                value={edit ? edit.doctor : ""}
                className="border rounded-md w-72 px-3 py-1 text-sm"
              />
            </div>
            <div className="input-group flex flex-col mb-3">
              <button className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 rounded-lg hover:bg-black">
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`fixed bg-white top-24 xl:left-1/3 xls:w-[350px] xs:w-[300px] xs:top-1/2 xs:left-1/2 xs:transform xs:-translate-x-1/2 xs:-translate-y-1/2 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2  md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 xl:top-24 xl:transform-none xl:-translate-x-0 xl:-translate-y-0 shadow-lg rounded-lg xls:top-1/2 xls:left-1/2 xls:transform xls:-translate-x-1/2 xls:-translate-y-1/2 ${
          deleted ? "block" : "hidden"
        }`}
      >
        <div className="flex justify-between px-5 py-5">
          <h2 className="font-bold text-lg">Delete Appointment</h2>
          <img
            src="./close.png"
            alt=""
            onClick={close}
            className="cursor-pointer  w-5 h-5"
          />
        </div>
        <hr />
        <div className="row md:px-24 py-10 sm:px-10 xls:px-10 xs:px-10">
          <h2>Are you sure you want to delete this appointment?</h2>
          <div className="row flex justify-between mt-9">
            <div className="col">
              <button className="bg-transparent text-BlueBlackColor text-sm font-bold px-5 py-2 rounded-lg border border-BlueBlackColor  hover:bg-DarkGray ">
                Yes
              </button>
            </div>
            <div className="col">
              <button
                className="bg-BlueBlackColor text-sm font-bold text-white px-5 py-2 rounded-lg hover:bg-black"
                onClick={close}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Appointments;
