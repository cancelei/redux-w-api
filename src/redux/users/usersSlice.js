import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Reducers go here
  },
  extraReducers: {},
});

// Export the reducer function as the default export
export default usersSlice.reducer;
