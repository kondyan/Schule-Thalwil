import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateAvatar,
  updateUserData,
  getUsers,
  setUserRole,
} from "./operations";
import { deletePost, getPostsByUserId } from "../articles/operations";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: null,
      username: null,
      name: null,
      secondName: null,
      email: null,
      avatar: null,
      role: [],
    },
    users: {
      data: [],
      isRefreshing: false,
      error: undefined,
    },
    posts: [],
    tutorials: [],
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
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
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users.data = action.payload;
        state.users.isRefreshing = false;
        state.users.error = undefined;
      })
      .addCase(getPostsByUserId.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log(action.payload);
        state.posts = state.posts.filter(
          (item) => item._id !== action.payload._id
        );
      })

      // .addCase(setUserRole.fulfilled, (state, action) => {
      //   console.log(...state.users.data);
      //   const user = state.users.data.find(
      //     (item) => (item._id = action.payload._id)
      //   );
      //   console.log(action.payload, user);
      //   state.users.isRefreshing = false;
      //   state.users.error = undefined;
      // })
      .addCase(getUsers.pending, (state) => {
        state.users.isRefreshing = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(updateAvatar.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(updateUserData.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(getUsers.rejected, (state, action) => {
        state.users.isRefreshing = false;
        state.users.error = action.payload;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
