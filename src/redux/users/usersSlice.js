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

export const usersReducer = usersSlice.reducer;
export default usersSlice;
