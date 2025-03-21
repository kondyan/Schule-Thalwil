import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./operations";

const slice = createSlice({
  name: "categories",
  initialState: {
    activeCategory: undefined,
    data: [],
    isRefreshing: false,
    error: undefined,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(getCategories.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
