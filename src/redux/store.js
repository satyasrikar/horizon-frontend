import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import mappingReducer from "./mappingSlice";

export default configureStore({
  reducer: {
    user: authReducer,
    mapping: mappingReducer,
  },
});
