import { createSlice } from "@reduxjs/toolkit";
import { getPostById, getPosts } from "./operations";

const slice = createSlice({
  name: "posts",
  initialState: {
    currentPage: 1,
    totalPages: undefined,
    limit: 10,
    data: [],
    currentPost: {
      data: {},
      isRefreshing: false,
      error: undefined,
    },
    isRefreshing: false,
    error: undefined,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(getPosts.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.currentPost.data = action.payload;
        state.currentPost.isRefreshing = false;
        state.currentPost.error = undefined;
      })
      .addCase(getPostById.pending, (state) => {
        state.currentPost.isRefreshing = true;
      })
      .addCase(getPostById.rejected, (state, action) => {
        state.currentPost.isRefreshing = false;
        state.currentPost.error = action.payload;
      });
  },
});

export default slice.reducer;
