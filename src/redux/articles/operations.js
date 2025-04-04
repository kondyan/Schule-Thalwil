import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const getPosts = createAsyncThunk("posts/get", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/posts");

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
      const id = state.auth.user.id;

      const response = await axios.get(`/posts/authors/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/createPost",
  async ({ title, imageUrl, content }, thunkAPI) => {
    try {
      const response = await axios.post("/posts", { title, imageUrl, content });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/posts/${id}`);

      return response.data;
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
