import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/user-store";

const initialState: UserState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  error: null,
  loading: false,
  passwordChangeFormErrors: {},
  updateFormErrors: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
      state.loading = false;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    updateUserRequest: (state, action) => {
      state.loading = true;
      state.updateFormErrors = {};
    },
    updateUserSuccess: (state, action) => {
      state.updateFormErrors = {};
      state.user = action.payload;
      state.loading = false;
    },
    updateUserError: (state, action) => {
      state.loading = false;
      state.updateFormErrors = action.payload;
    },
    logoutUser: (state) => {
      state.accessToken = null;
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
    },
    loginError: (state, action) => {
      state.error = action.payload;
      state.accessToken = null;
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    changePasswordRequest: (state, action) => {
      state.loading = true;
      state.passwordChangeFormErrors = {};
    },
    changePasswordSuccess: (state) => {
      state.loading = false;
      state.passwordChangeFormErrors = {};
    },
    changePasswordError: (state, action) => {
      state.loading = false;
      state.passwordChangeFormErrors = action.payload;
    },
    deleteUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.accessToken = null;
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.error = null;
      state.loading = false;
    },
    deleteUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserImageRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserImageSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    deleteUserImageError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetErrors: (state) => {
      state.error = null;
      state.passwordChangeFormErrors = {};
      state.updateFormErrors = {};
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,
  setAccessToken,
  logoutUser,

  updateUserError,
  updateUserRequest,
  updateUserSuccess,

  changePasswordError,
  changePasswordRequest,
  changePasswordSuccess,

  deleteUserError,
  deleteUserRequest,
  deleteUserSuccess,

  deleteUserImageError,
  deleteUserImageRequest,
  deleteUserImageSuccess,

  resetErrors,
} = userSlice.actions;

export default userSlice.reducer;