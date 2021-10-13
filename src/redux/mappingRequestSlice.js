import { createSlice } from "@reduxjs/toolkit";

const mappingRequestSlice = createSlice({
  name: "mappingRequest",
  initialState: [
    {
      id: null,
      isApproved: false,
      mappingContent: "",
      partnerName: "",
    },
  ],

  reducers: {
    setMappingView: (state, action) => {
      const setMappingView = {
        id: action.payload.id,
        isApproved: false,
        mappingContent: action.payload.mappingContent,
        partnerName: action.payload.partnerName,
      };
      return setMappingView;
    },
  },
});

export const { setMappingView } = mappingRequestSlice.actions;

export default mappingRequestSlice.reducer;
