import React, { useState } from "react";
import axios from "axios";

const ConsultOnline = () => {
  const [formData, setFormData] = useState({
    consultationDate: "",
    consultationTime: "",
    consultationReason: "",
    consultationStatus: "PENDING",
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
    const consultationData = {
      consultation_date: formData.consultationDate,
      consultation_time: formData.consultationTime,
      consultation_reason: formData.consultationReason,
      consultation_status: formData.consultationStatus,
    };

    try {
      await axios.post(
        "http://localhost:8091/api/consultations",
        consultationData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setFeedback(
        `Your consultation is scheduled on ${formData.consultationDate} at ${formData.consultationTime}.`
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
          Schedule Online Consultation
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Consultation Date
          </label>
          <input
            type="date"
            name="consultationDate"
            value={formData.consultationDate}
            onChange={handleChange}
            placeholder="Select a date"
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Consultation Time
          </label>
          <input
            type="time"
            name="consultationTime"
            value={formData.consultationTime}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Consultation Reason
          </label>
          <input
            type="text"
            name="consultationReason"
            value={formData.consultationReason}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">
            Consultation Status
          </label>
          <select
            name="consultationStatus"
            value={formData.consultationStatus}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="PENDING">PENDING</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </div>

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

export default ConsultOnline;
