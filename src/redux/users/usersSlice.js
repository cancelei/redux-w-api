import { createSlice } from "@reduxjs/toolkit";
// Add a default state that maps over your users inside of an unordered list:
// Add a key to the container element.
// Render the first and last name of the user
const usersSlice = createSlice({
  name: "users",
  initialState: {
    usersList: [],
    },
  reducers: {
    // Reducers go here
    },
  extraReducers: {},
});

export const usersReducer = usersSlice.reducer;
export default usersSlice;