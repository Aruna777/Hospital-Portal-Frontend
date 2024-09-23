import React from "react";
import { FiPhoneCall, FiAlertCircle, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-white  font-libre-caslon">
        Health Clinic
      </h1>

      <div className="flex space-x-4 md:space-x-6">
        <button className="flex items-center bg-white text-purple-700 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-purple-200 shadow">
          <FiPhoneCall className="mr-2" /> Contact
        </button>
        <button className="flex items-center bg-white text-red-600 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-red-200 shadow">
          <FiAlertCircle className="mr-2" /> Emergency
        </button>
        <button className="flex items-center bg-white text-gray-700 px-3 py-2 md:px-4 md:py-2 rounded-full hover:bg-gray-200 shadow">
          <FiUser className="mr-2" /> Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
