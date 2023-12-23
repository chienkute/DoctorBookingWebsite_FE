import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    changing: false,
    search: "",
    serviceName: "",
    serviceId: "",
  },
  reducers: {
    updateChanging: (state, action) => {
      state.changing = action.payload.changing;
    },
    updateSearch: (state, action) => {
      state.search = action.payload.search;
    },
    updateServiceName: (state, action) => {
      state.serviceName = action.payload.serviceName;
    },
    updateServiceID: (state, action) => {
      state.serviceId = action.payload.serviceId;
    },
  },
});
export const {
  updateChanging,
  updateSearch,
  updateServiceName,
  updateServiceID,
} = userSlice.actions;
export default userSlice.reducer;
