import React, { useState } from "react";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Sample phone number
  const phoneNumber = "123-456-7890";

  const handleContactClick = () => {
    setShowPhoneNumber((prev) => !prev); // Toggle phone number display
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Navigate to /profile
  };

  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-white font-libre-caslon">
        Health Clinic
      </h1>

      <div className="flex items-center space-x-4 md:space-x-6 relative">
        <button
          className="flex items-center bg-white text-purple-700 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-purple-200 shadow"
          onClick={handleContactClick}
        >
          <FiPhoneCall className="mr-2" /> Contact
        </button>
        {showPhoneNumber && (
          <div className="absolute left-0 top-full mt-1 bg-white text-purple-700 px-4 py-2 rounded shadow-lg">
            <p>Call us at: {phoneNumber}</p>
          </div>
        )}
        <button
          className="flex items-center bg-white text-gray-700 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-gray-200 shadow"
          onClick={handleProfileClick} // Add onClick handler for Profile button
        >
          <FiUser className="mr-2" /> Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
