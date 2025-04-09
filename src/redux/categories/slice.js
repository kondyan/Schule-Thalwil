import { createSlice } from "@reduxjs/toolkit";
import {
  changeTutorial,
  createCategory,
  deleteCategory,
  getCategories,
  getTutorials,
} from "./operations";

const pending = (state) => {
  state.isRefreshing = true;
};

const rejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "categories",
  initialState: {
    activeCategory: undefined,
    categories: [],
    tutorials: [],
    isRefreshing: false,
    error: undefined,
  },
  reducers: {
    clearActiveCategory(state) {
      state.activeCategory = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(getCategories.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(getTutorials.fulfilled, (state, action) => {
        state.tutorials = action.payload.data.reverse();
        state.activeCategory = action.payload.activeCategory;
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(getTutorials.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getTutorials.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          ({ _id }) => _id !== action.payload
        );
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
        state.isRefreshing = false;
        state.error = undefined;
      })
      .addCase(createCategory.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(changeTutorial.fulfilled, (state, action) => {
        state.activeCategory = action.payload.category;
        state.isRefreshing = false;
        state.error = undefined;
      });
  },
});
export const { clearActiveCategory } = slice.actions;
export default slice.reducer;
