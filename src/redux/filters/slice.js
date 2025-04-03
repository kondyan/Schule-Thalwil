import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    status: "",
  },
  reducers: {
    setUserFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setUserFilter } = slice.actions;

export default slice.reducer;
