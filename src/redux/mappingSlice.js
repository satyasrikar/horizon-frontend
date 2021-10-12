import { createSlice } from "@reduxjs/toolkit";

const mappingSlice = createSlice({
  name: "mapping",
  initialState: [
    {
      id: null,
      username: "",
      mappingContent: "",
    },
  ],

  reducers: {
    addMapping: (state, action) => {
      const addMapping = {
        id: action.payload.id,
        username: action.payload.username,
        mappingContent: action.payload.mappingContent,
      };
      return addMapping;
    },
  },
});

export const { addMapping } = mappingSlice.actions;

export default mappingSlice.reducer;
