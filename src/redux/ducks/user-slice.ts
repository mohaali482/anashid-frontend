import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  LoginResponseWithUser,
  ResetPasswordParams,
  UserState,
} from "../../types/user-store";

const initialState: UserState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  error: null,
  loading: false,
  passwordChangeFormErrors: {},
  updateFormErrors: {},
  deleteAccountErrors: {},
  signupFormErrors: {},
  resetFormErrors: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponseWithUser>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.access;
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
      state.loading = true;
    },
    logoutUserSuccess: (state) => {
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
    signupUser: (state, action) => {
      state.loading = true;
    },
    signupUserSuccess: (state) => {
      state.loading = false;
      state.signupFormErrors = {};
    },
    signupUserError: (state, action) => {
      state.loading = false;
      state.signupFormErrors = action.payload;
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
    deleteUserRequest: (state, action) => {
      state.loading = true;
      state.deleteAccountErrors = {};
    },
    deleteUserSuccess: (state) => {
      state.accessToken = null;
      state.user = null;
      state.accessToken = null;
      state.isLoggedIn = false;
      state.deleteAccountErrors = {};
      state.loading = false;
    },
    deleteUserError: (state, action) => {
      state.loading = false;
      state.deleteAccountErrors = action.payload;
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
      state.signupFormErrors = {};
    },
    forgotPasswordRequest: (state, action: PayloadAction<FormData>) => {
      state.loading = true;
    },
    forgotPasswordSuccess: (state) => {
      state.loading = false;
    },
    forgotPasswordError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPasswordRequest: (
      state,
      action: PayloadAction<ResetPasswordParams>
    ) => {
      state.loading = true;
    },
    resetPasswordSuccess: (state) => {
      state.loading = false;
      state.resetFormErrors = {};
    },
    resetPasswordError: (state, action) => {
      state.loading = false;
      state.resetFormErrors = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginError,
  setAccessToken,

  logoutUser,
  logoutUserSuccess,

  signupUser,
  signupUserError,
  signupUserSuccess,

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

  forgotPasswordRequest,
  forgotPasswordError,
  forgotPasswordSuccess,
  resetPasswordRequest,
  resetPasswordError,
  resetPasswordSuccess,
} = userSlice.actions;

export default userSlice.reducer;
