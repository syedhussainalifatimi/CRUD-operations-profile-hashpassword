import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adminInfo: {
   signin: false
  }
};


const adminSlice = createSlice({
  name: "adminDetails",
  initialState,
  reducers: {
    signInAdmin: (state) => {
      state.adminInfo.signin = true;
    },
     signOutAdmin: (state) => {
      state.adminInfo.signin = false;
    },
  }
});

export const { signInAdmin, signOutAdmin } = adminSlice.actions;

export default adminSlice.reducer;
