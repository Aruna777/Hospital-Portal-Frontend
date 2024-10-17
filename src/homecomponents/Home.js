import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfileData, updateCheckup } from "../redux/profileSlice";
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
  const dispatch = useDispatch();
  const { checkups = [] } = useSelector((state) => state.profile || {});

  const appointments = useSelector((state) => state.profile.appointments);
  const consultations = useSelector((state) => state.profile.consultations);
  const userId = useSelector((state) => state.profile.userId);

  useEffect(() => {
    const subscribeToSSE = () => {
      console.log("initiatesse");
      const eventSource = new EventSource(
        "http://localhost:8096/sse/checkup-updates"
      );

      eventSource.onmessage = (event) => {
        const newCheckup = JSON.parse(event.data);
        console.log("New Checkup Update:", newCheckup);
        dispatch(updateCheckup(newCheckup));
      };
      eventSource.onerror = () => {
        eventSource.close();
        setTimeout(() => {
          subscribeToSSE();
        }, 5000);
      };
    };
    if (userId) {
      dispatch(fetchProfileData(userId));
      subscribeToSSE();
    } else {
      console.error("User ID is undefined");
    }
  }, [dispatch, userId]);

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
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-indigo-100 to-blue-50">
      <h2 className="text-4xl font-bold text-center mb-8 mt-10">
        Welcome to HealthCare Portal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl px-4 mt-10">
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
        <h2 className="text-4xl font-bold text-center mb-8">View Bookings</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mx-2">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Appointments Booked
            </h2>
            {appointments.length === 0 ? (
              <p className="text-center">No appointments booked.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mb-8 h-44">
                  <thead>
                    <tr className="bg-purple-300">
                      <th className="border border-gray-300 p-4 text-left">
                        Reason
                      </th>
                      <th className="border border-gray-300 p-4 text-left">
                        Date
                      </th>
                      <th className="border border-gray-300 p-4 text-left">
                        Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointments.map((appointment) => (
                      <tr
                        key={appointment.appointmentId}
                        className="hover:bg-purple-100"
                      >
                        <td className="border border-gray-300 p-4">
                          {appointment.appointmentReason}
                        </td>
                        <td className="border border-gray-300 p-4">
                          {appointment.appointmentDate}
                        </td>
                        <td className="border border-gray-300 p-4">
                          {appointment.appointmentTime}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/3 mx-2">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Health Checkups Booked
            </h2>
            {checkups.length === 0 ? (
              <p className="text-center">No checkups booked.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mb-8 h-44">
                  <thead>
                    <tr className="bg-red-300">
                      <th className="border border-gray-300 p-4 text-left">
                        Date
                      </th>
                      <th className="border border-gray-300 p-4 text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {checkups.map((checkup) => (
                      <tr key={checkup.checkupId} className="hover:bg-red-100">
                        <td className="border border-gray-300 p-4">
                          {checkup.checkupDate}
                        </td>
                        <td className="border border-gray-300 p-4">
                          {checkup.checkupStatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/3 mx-2">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Consultations Booked
            </h2>
            {consultations.length === 0 ? (
              <p className="text-center">No consultations booked.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md mb-8 h-44">
                  <thead>
                    <tr className="bg-blue-300">
                      <th className="border border-gray-300 p-4 text-left">
                        Date
                      </th>
                      <th className="border border-gray-300 p-4 text-left">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {consultations.map((consultation) => (
                      <tr
                        key={consultation.consultationId}
                        className="hover:bg-blue-100"
                      >
                        <td className="border border-gray-300 p-4">
                          {consultation.consultationDate}
                        </td>
                        <td className="border border-gray-300 p-4">
                          {consultation.consultationStatus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
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
