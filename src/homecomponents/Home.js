import React from "react";
import { Link } from "react-router-dom";
import {
  CalendarIcon,
  HeartIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon as HeartOutline,
  UserIcon,
  BeakerIcon,
  DocumentIcon,
  ChatBubbleLeftIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  HandRaisedIcon,
  EyeIcon,
  StarIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const specialties = [
    {
      name: "Cardiology",
      icon: <HeartOutline className="h-6 w-6 text-red-600" />,
    },
    {
      name: "Neurology",
      icon: <UserIcon className="h-6 w-6 text-yellow-500" />,
    },
    {
      name: "Gastroenterology",
      icon: <BeakerIcon className="h-6 w-6 text-green-500" />,
    },
    {
      name: "Orthopedic",
      icon: <DocumentIcon className="h-6 w-6 text-blue-500" />,
    },
    {
      name: "Oncology",
      icon: <ShieldCheckIcon className="h-6 w-6 text-pink-600" />,
    },
    {
      name: "Gynecology",
      icon: <UserGroupIcon className="h-6 w-6 text-purple-600" />,
    },
    {
      name: "Dermatology",
      icon: <StarIcon className="h-6 w-6 text-cyan-600" />,
    },
    {
      name: "Ophthalmology",
      icon: <EyeIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Pediatrics",
      icon: <HandRaisedIcon className="h-6 w-6 text-indigo-600" />,
    },
    {
      name: "Endocrinology",
      icon: <DocumentIcon className="h-6 w-6 text-teal-500" />,
    },
    {
      name: "Urology",
      icon: <HeartOutline className="h-6 w-6 text-orange-500" />,
    },
    {
      name: "Pulmonology",
      icon: <BeakerIcon className="h-6 w-6 text-purple-500" />,
    },
    {
      name: "Neurosurgery",
      icon: <UserIcon className="h-6 w-6 text-green-500" />,
    },
    {
      name: "Radiology",
      icon: <XCircleIcon className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Psychiatry",
      icon: <ChatBubbleLeftIcon className="h-6 w-6 text-red-600" />,
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4 mt-20">
        <Link
          to="/BookAppointment"
          className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:bg-purple-100 border border-purple-200"
        >
          <CalendarIcon className="h-16 w-16 text-purple-700 mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Book Appointment
          </h2>
        </Link>

        <Link
          to="/HealthCheckup"
          className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:bg-red-100 border border-red-200"
        >
          <HeartIcon className="h-16 w-16 text-red-500 mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Book Health Check-up
          </h2>
        </Link>

        <Link
          to="/ConsultOnline"
          className="bg-white shadow-lg rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 transition-transform hover:shadow-xl hover:bg-blue-100 border border-blue-200"
        >
          <VideoCameraIcon className="h-16 w-16 text-blue-600 mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Consult Online
          </h2>
        </Link>
      </div>

      <div className="mt-12 w-full max-w-4xl px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore our Centres of Clinical Excellence
        </h2>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specialties.map((specialty, index) => (
              <button
                key={index}
                className="flex items-center text-gray-600 p-4 bg-white hover:bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-16"
              >
                <span className="mr-4">{specialty.icon}</span>
                <span className="text-lg font-semibold">{specialty.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
