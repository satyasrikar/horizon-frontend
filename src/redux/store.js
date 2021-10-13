import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import mappingRequestReducer from "./mappingRequestSlice.js";
import mappingReducer from "./mappingSlice";

export default configureStore({
  reducer: {
    user: authReducer,
    mapping: mappingReducer,
    mappingRequest: mappingRequestReducer,
  },
});
