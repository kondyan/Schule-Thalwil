import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

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

export const getCategoriesById = createAsyncThunk(
  "categories/getCategoriesById",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/categories");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createCategory = createAsyncThunk(
  "categories/post",
  async (name, thunkAPI) => {
    try {
      const response = await axios.post("/categories", { name });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (_id, thunkAPI) => {
    try {
      const response = await axios.delete(`/categories/${_id}`);

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

export const getTutorialsByUserId = createAsyncThunk(
  "tutorials/getTutorialsByUserId",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const id = state.auth.user.id;

      const response = await axios.get(`/tutorials/authors/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createTutorial = createAsyncThunk(
  "tutorials/createTutorial",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/tutorials", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
