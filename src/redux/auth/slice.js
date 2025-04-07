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
import {
  changePost,
  createPost,
  deletePost,
  getPostsByUserId,
} from "../articles/operations";
import {
  changeTutorial,
  createTutorial,
  deleteTutorial,
  getTutorialsByUserId,
} from "../categories/operations";

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
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatar = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(updateAvatar.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload;
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

      .addCase(getUsers.fulfilled, (state, action) => {
        state.users.data = action.payload;
        state.users.isRefreshing = false;
        state.users.error = undefined;
      })
      .addCase(getUsers.pending, (state) => {
        state.users.isRefreshing = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.users.isRefreshing = false;
        state.users.error = action.payload;
      })

      .addCase(getPostsByUserId.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })

      .addCase(getTutorialsByUserId.fulfilled, (state, action) => {
        state.tutorials = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })

      .addCase(setUserRole.fulfilled, (state, action) => {
        state.users.data = state.users.data.map((user) =>
          user._id === action.payload._id ? action.payload : user
        );
        state.users.isRefreshing = false;
        state.users.error = undefined;
      })

      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.isRefreshing = false;
        state.error = undefined;
      })

      .addCase(createPost.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(({ _id }) => _id !== action.payload);
        state.isRefreshing = false;
        state.error = undefined;
      })

      .addCase(deletePost.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(changePost.fulfilled, (state, action) => {
        state.posts = state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
        state.isRefreshing = false;
        state.error = undefined;
      })

      .addCase(changePost.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(createTutorial.fulfilled, (state, action) => {
        state.tutorials.push(action.payload);
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(createTutorial.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(deleteTutorial.fulfilled, (state, action) => {
        state.tutorials = state.tutorials.filter(
          ({ _id }) => _id !== action.payload
        );
        state.isRefreshing = false;
        state.error = undefined;
      })

      .addCase(deleteTutorial.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(changeTutorial.fulfilled, (state, action) => {
        state.tutorials = state.tutorials.map((tutorial) =>
          tutorial._id === action.payload._id ? action.payload : tutorial
        );
        state.isRefreshing = false;
        state.error = undefined;
      })

      .addCase(changeTutorial.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
