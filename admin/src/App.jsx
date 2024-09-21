import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Appointments from "./pages/appointments";
import Blogs from "./pages/blogs";
import NewAppointment from "./pages/newAppointment";
import NewBlog from "./pages/newBlog";
import BookedAppointments from "./pages/BookedAppointments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointments2" element={<BookedAppointments />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/new-appointment" element={<NewAppointment />} />
        <Route path="/new-blog" element={<NewBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
