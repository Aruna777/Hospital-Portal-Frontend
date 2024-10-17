import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileData } from "../redux/profileSlice"; // Import your existing action

const Profile = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.profile.userId);
  const { user, loading, error } = useSelector((state) => state.profile); // Selecting user profile slice

  useEffect(() => {
    if (userId) {
      dispatch(fetchProfileData(userId));
    } else {
      console.error("User ID is undefined");
    }
  }, [dispatch, userId]);

  if (loading) {
    return <div className="text-center text-lg text-gray-500">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching user profile
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-indigo-100 to-blue-50">
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
          <h1 className="text-2xl font-bold text-teal-500 mb-4 text-center">
            User Profile
          </h1>
          <div className="space-y-4">
            <p>
              <strong className="text-gray-700">Username:</strong>{" "}
              {user.username}
            </p>
            <p>
              <strong className="text-gray-700">Email:</strong> {user.email}
            </p>
            <p>
              <strong className="text-gray-700">Phone Number:</strong>{" "}
              {user.phoneNumber}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600">
          No user profile found. Please try again later.
        </div>
      )}
    </div>
  );
};

export default Profile;
