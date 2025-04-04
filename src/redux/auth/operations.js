import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", credentials);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/auth/login", credentials);

      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUsers = createAsyncThunk("users/get", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/users");

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateAvatar = createAsyncThunk(
  "auth/updateAvatar",
  async (file, thunkAPI) => {
    try {
      const avatarFormData = new FormData();
      avatarFormData.append("avatar", file);

      const response = await axios.patch("/users/avatar", avatarFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response.data.avatar;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.patch("/users/update", credentials);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setUserRole = createAsyncThunk(
  "auth/setUserRole",
  async ({ _id, data }, thunkAPI) => {
    try {
      const response = await axios.patch(`/users/${_id}/role`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");

    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to refresh User");
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
