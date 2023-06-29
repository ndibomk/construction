import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import * as api from '../api'
const url = 'https://hustle-kenya-7azi.onrender.com/users'

export const login = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await  axios.post(`${url}/signin`,formValue);
      toast.success("Login Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      // return rejectWithValue(err.response.data);
      toast.error("User with that email does not exist");

    }
  }
);
export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await  axios.post(`${url}/forgotpassword`,formValue);
      toast.success("send Successfully");
      navigate('/')
      return response.data;
    } catch (err) {
      return rejectWithValue('check your email');
    }
  }
);
export const register = createAsyncThunk(
  "auth/register",
  async ({ form, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await  axios.post(`${url}/signup`,form);
      toast.success("Register Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      toast.error("User with that email  already exist");

      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "auth/deleteUser",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await url.deleteUser(id);
      toast.success("User Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ id,updatedTourData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateUser(updatedTourData,id);
      toast.success("Tour Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const googleSignIn = createAsyncThunk(
  "auth/googleSignIn",
  async ({ result, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.googleSignIn(result);
      toast.success("Google Sign-in Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
      toast('log out successfully')
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [forgetPassword.pending]: (state, action) => {
      state.loading = true;
    },
    [forgetPassword.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [forgetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [googleSignIn.pending]: (state, action) => {
      state.loading = true;
    },
    [googleSignIn.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [googleSignIn.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.user = state.user.filter((item) => item._id !== id);
        state.user = state.user.filter((item) => item._id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateUser.pending]: (state, action) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userTours = state.userTours.map((item) =>
          item._id === id ? action.payload : item
        );
        state.tours = state.tours.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;