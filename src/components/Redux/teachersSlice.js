import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teachersInfo: []
};


export const teachersDetailsSlice = createSlice({
  name: 'teachersDetails',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachersInfo = [...state.teachersInfo, ...action.payload]; // Assuming payload is an array
    },
    removeTeacher: (state, action) => {
      state.teachersInfo = state.teachersInfo.filter(
        item => item.email !== action.payload.email
      );
    },
  },
});

export const { addTeacher, removeTeacher } = teachersDetailsSlice.actions;

export default teachersDetailsSlice.reducer;
