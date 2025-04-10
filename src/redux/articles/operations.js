import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const getPosts = createAsyncThunk(
  "posts/get",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/posts", { params: { page } });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/posts/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getPostsByUserId = createAsyncThunk(
  "posts/getPostsByUserId",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const id = state.auth.user._id;

      const response = await axios.get(`/posts/authors/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/create",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/posts", credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePost = createAsyncThunk(
  "posts/change",
  async ({ _id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/posts/${_id}`, data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (_id, thunkAPI) => {
    try {
      await axios.delete(`/posts/${_id}`);

      return _id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "posts/uploadImage",
  async (file, thunkAPI) => {
    try {
      const imageFormData = new FormData();
      imageFormData.append("image", file);

      const response = await axios.post("/posts/upload", imageFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
