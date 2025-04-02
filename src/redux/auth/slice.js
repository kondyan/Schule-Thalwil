import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
  updateUserData,
} from "./operations";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      username: null,
      name: null,
      secondName: null,
      email: null,
      avatar: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
    isAdmin: false,
    error: undefined,
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = undefined;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = undefined;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.error = undefined;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      });
  },
});

export default slice.reducer;
