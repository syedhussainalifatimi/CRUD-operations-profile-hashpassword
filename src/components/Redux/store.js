import {configureStore} from '@reduxjs/toolkit';
import teachersDetailsReducer from '../Redux/teachersSlice';
import adminDetailsReducer from '../Redux/adminSlice';

export const store = configureStore({
  reducer:{
      teachersDetails: teachersDetailsReducer,
      adminDetails: adminDetailsReducer,
  },
})