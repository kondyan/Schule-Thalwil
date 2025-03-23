import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const getCategories = createAsyncThunk(
  "categories/get",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTutorials = createAsyncThunk(
  "categories/getTutorials",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/tutorials/${id}`);
      response.data.activeCategory = id;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
