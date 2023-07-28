import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://reqres.in/api/users');
  const data = await response.json();
  return data.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
