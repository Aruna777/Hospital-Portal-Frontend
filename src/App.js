import React, { useState } from "react";
import "./App.css";
import Navbar from "./navbarcomponents/Navbar";
import Home from "./homecomponents/Home";
import Login from "./navbarcomponents/Login";
import Register from "./navbarcomponents/Register";
import { Routes, Route } from "react-router-dom";
import ConsultOnline from "./homecomponents/ConsultOnline";
import HealthCheckup from "./homecomponents/HealthCheckup";
import BookAppointment from "./homecomponents/BookAppointment";
import Profile from "./navbarcomponents/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App min-h-screen flex flex-col">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-gradient-radial from-pink-500/15 to-transparent"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-gradient-radial from-pink-500/15 to-transparent"></div>
      </div>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/HealthCheckup" element={<HealthCheckup />} />
        <Route path="/ConsultOnline" element={<ConsultOnline />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/login"
          element={<Login onLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/register"
          element={<Register onRegisterSuccess={handleLoginSuccess} />}
        />
      </Routes>
    </div>
  );
}

export default App;
