import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: null,
      username: "",
      loggedIn: false,
      accessToken: "",
      authority: "",
    },
  ],

  reducers: {
    registerClientUser: (state, action) => {
      const newClientUser = {
        id: null,
        username: "",
        loggedIn: false,
        accessToken: "",
        authority: "user",
      };
      return newClientUser;
    },
    addUser: (state, action) => {
      const newUser = {
        id: action.payload.id,
        username: action.payload.username,
        loggedIn: true,
        accessToken: action.payload.accessToken,
        authority: action.payload.authority,
      };
      return newUser;
    },
    logout: (state, action) => {
      const newUser = {
        id: null,
        username: "",
        loggedIn: false,
        accessToken: "",
        authority: "",
      };
      return newUser;
    },
  },
});

export const { addUser, logout, registerClientUser } = authSlice.actions;

export default authSlice.reducer;
