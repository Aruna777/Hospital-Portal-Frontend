import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProfileData = createAsyncThunk(
  "profile/fetchProfileData",
  async (userId) => {
    const response = await fetch(
      `http://localhost:8096/aggregate/profiles/${userId}`
    );
    const data = await response.json();
    console.log("Fetched Profile Data:", data); // Log fetched data for debugging
    return data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userId: null,
    userProfile: null,
    appointments: [],
    consultations: [],
    checkups: [],
  },
  reducers: {
    setUserId: (state, action) => {
      console.log("set user_id", action.payload);
      state.userId = action.payload;
    },
    updateCheckup: (state, action) => {
      console.log("add checkup");
      let checkupSync = [];
      for (let checkup of state.checkups) {
        if (checkup.checkupId === action.payload.checkup_id) {
          checkup.checkupStatus = action.payload.checkup_status;
        }
        checkupSync.push(checkup);
      }
      state.checkups = checkupSync;
    },

    setProfileData(state, action) {
      const { userProfile, appointments, consultations, checkups } =
        action.payload;
      state.userProfile = userProfile;
      state.appointments = appointments;
      state.consultations = consultations;
      state.checkups = checkups;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.fulfilled, (state, action) => {
      console.log("Profile Data Set:", action.payload); // Log state updates for debugging
      state.userProfile = action.payload.userProfile;
      state.appointments = action.payload.appointments;
      state.consultations = action.payload.consultations;
      state.checkups = action.payload.checkups;
    });
  },
});

export const { updateCheckup } = profileSlice.actions;
export const { setProfileData } = profileSlice.actions;
export const { setUserId } = profileSlice.actions;
export default profileSlice.reducer;
