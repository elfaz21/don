import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Appointment from "./pages/appointment";
import { MyContext } from "./context/Context";
import Login from "./pages/loginAndRegistration/Login";
import UserRegistration from "./pages/loginAndRegistration/Register";
import UserEdit from "./pages/loginAndRegistration/EditPage";
import ProfilePage from "./pages/profile/profile";
import UserAppointments from "./pages/profile/userAppointments.jsx/userAppointments";
import BookedAppointments from "./booked/BookedAppointments";
import BlogDetails from "./pages/blogDetail";
import ForgotPassword from "./pages/loginAndRegistration/forgot";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
      <MyContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          userId,
          setUserId,
          loggedInUser,
          setLoggedInUser,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/signIn" element={<Login />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/edit" element={<UserEdit />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/userAppointments" element={<UserAppointments />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/bookedAppointments"
              element={<BookedAppointments />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
