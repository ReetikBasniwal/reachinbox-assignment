import { configureStore } from "@reduxjs/toolkit";
import { oneboxReducer } from "./reducers/oneboxSlice";
import authReducer from './reducers/authSlice';

export const store = configureStore({
  reducer: {
    oneboxReducer,
    auth: authReducer,
  }
});
