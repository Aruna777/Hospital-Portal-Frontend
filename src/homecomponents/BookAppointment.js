import React, { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    appointmentDate: "",
    appointmentTime: "",
    appointmentReason: "",
    appointmentStatus: "PENDING",
  });

  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const bookingData = {
      appointment_date: formData.appointmentDate,
      appointment_time: formData.appointmentTime,
      appointment_status: formData.appointmentStatus,
      appointment_reason: formData.appointmentReason,
    };

    try {
      await axios.post("http://localhost:8090/api/bookings", bookingData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setFeedback(
        `Your appointment is booked on ${formData.appointmentDate} at ${formData.appointmentTime}.`
      );
    } catch (error) {
      setFeedback("Booking is unsuccessful.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-blue-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg md:max-w-2xl lg:max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
          Book Appointment
        </h2>

        {Object.entries(formData).map(([key, value]) => {
          if (key === "appointmentStatus") {
            return (
              <div key={key} className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Appointment Status
                </label>
                <select
                  name={key}
                  value={value}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="CONFIRMED">CONFIRMED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
            );
          }
          if (key === "appointmentTime") {
            return (
              <div key={key} className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Appointment Time
                </label>
                <input
                  type="time"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            );
          }
          return (
            <div key={key} className="mb-4">
              <label className="block text-gray-700 font-medium">
                {key === "appointmentDate"
                  ? "Appointment Date"
                  : key.replace(/([A-Z])/g, " $1").replace("Reason", " Reason")}
              </label>
              <input
                type={key.includes("Date") ? "date" : "text"}
                name={key}
                value={value}
                onChange={handleChange}
                required
                placeholder={key === "appointmentDate" ? "Select Date" : ""}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          );
        })}

        <button
          type="submit"
          className="w-full bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Submit
        </button>

        {feedback && (
          <div className="mt-4 text-center">
            <p
              className={`font-medium ${
                feedback.includes("unsuccessful")
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {feedback}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookAppointment;
