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
  extraReducers: (builder) => {
    // Add extraReducers here using builder.addCase or builder.addMatcher
  },
});

export default usersSlice.reducer;
