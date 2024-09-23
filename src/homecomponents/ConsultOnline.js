import React, { useState } from "react";
import axios from "axios";

const ConsultOnline = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    consultationDate: "",
    startTime: "",
    endTime: "",
    reason: "",
    status: "PENDING",
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
      firstname: formData.firstName,
      lastname: formData.lastName,
      phonenumber: formData.phoneNumber,
      consultationDate: formData.consultationDate,
      startTime: formData.startTime,
      endTime: formData.endTime,
      reason: formData.reason,
      status: formData.status,
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
        `Your consultation is scheduled on ${formData.consultationDate} from ${formData.startTime} to ${formData.endTime}.`
      );
    } catch (error) {
      setFeedback("Booking is unsuccessful.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-10 w-full max-w-lg md:max-w-2xl lg:max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
          Schedule Online Consultation
        </h2>

        {Object.entries(formData).map(([key, value]) => {
          if (key === "status") {
            return (
              <div key={key} className="mb-4">
                <label className="block text-gray-700 font-medium">
                  Status
                </label>
                <select
                  name={key}
                  value={value}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
            );
          }
          return (
            <div key={key} className="mb-4">
              <label className="block text-gray-700 font-medium">
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </label>
              <input
                type={
                  key === "consultationDate"
                    ? "date"
                    : key.includes("Time")
                    ? "time"
                    : "text"
                }
                name={key}
                value={value}
                onChange={handleChange}
                required
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

export default ConsultOnline;
