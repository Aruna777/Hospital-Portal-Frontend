import { createSlice } from "@reduxjs/toolkit";

const checkupSlice = createSlice({
  name: "checkup",
  initialState: {
    checkups: [],
  },
  reducers: {
    addCheckup: (state, action) => {
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
  },
});

export const { addCheckup } = checkupSlice.actions;
export default checkupSlice.reducer;
