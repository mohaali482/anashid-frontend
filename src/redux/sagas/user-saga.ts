import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  changePasswordError,
  changePasswordSuccess,
  deleteUserError,
  deleteUserImageError,
  deleteUserImageSuccess,
  deleteUserSuccess,
  forgotPasswordError,
  forgotPasswordSuccess,
  loginError,
  loginSuccess,
  logoutUserSuccess,
  resetPasswordError,
  resetPasswordSuccess,
  signupUserError,
  signupUserSuccess,
  updateUserError,
  updateUserSuccess,
} from "../ducks/user-slice";
import {
  requestChangePassword,
  requestForgotPassword,
  requestLogin,
  requestLogout,
  requestPersonalInfo,
  requestResetPassword,
  requestUserDelete,
  requestUserImageDelete,
  requestUserSignup,
  requestUserUpdate,
} from "../../services/user";
import {
  LoginResponse,
  LoginResponseWithUser,
  ResetPasswordParams,
  User,
} from "../../types/user-store";

export function* loginSaga(action: PayloadAction<FormData>) {
  try {
    let data: LoginResponseWithUser = yield call(requestLogin, action.payload);
    yield put(loginSuccess(data));
  } catch (error) {
    if (error.response !== undefined) {
      yield put(loginError(error.response.data));
    } else {
      yield put(loginError(error.message));
    }
  }
}

export function* logoutSaga() {
  try {
    yield call(requestLogout);
    yield put(logoutUserSuccess());
  } catch (error) {
    if (error.response !== undefined) {
      yield put(loginError(error.response.data));
    } else {
      yield put(loginError(error.message));
    }
  }
}

export function* updateUserSaga(action: PayloadAction<FormData>) {
  try {
    let data: User = yield call(requestUserUpdate, action.payload);
    yield put(updateUserSuccess(data));
  } catch (error) {
    if (error.response !== undefined) {
      yield put(updateUserError(error.response.data));
    } else {
      yield put(updateUserError(error.message));
    }
  }
}

export function* signupUserSaga(action: PayloadAction<FormData>) {
  try {
    let data: User = yield call(requestUserSignup, action.payload);
    yield put(signupUserSuccess());
  } catch (error) {
    if (error.response !== undefined) {
      yield put(signupUserError(error.response.data));
    } else {
      yield put(signupUserError(error.message));
    }
  }
}

export function* changePasswordSaga(action: PayloadAction<FormData>) {
  try {
    yield call(requestChangePassword, action.payload);
    yield put(changePasswordSuccess());
  } catch (error) {
    if (error.response !== undefined) {
      yield put(changePasswordError(error.response.data));
    } else {
      yield put(changePasswordError(error.message));
    }
  }
}

export function* deleteUserSaga(action: PayloadAction<FormData>) {
  try {
    yield call(requestUserDelete, action.payload);
    yield put(deleteUserSuccess());
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

export function* deleteUserImageSaga() {
  try {
    yield call(requestUserImageDelete);
    const user: User = yield call(requestPersonalInfo);
    yield put(deleteUserImageSuccess(user));
  } catch (error) {
    yield put(deleteUserImageError(error.message));
  }
}

export function* forgotPasswordSaga(action: PayloadAction<FormData>) {
  try {
    yield call(requestForgotPassword, action.payload);
    yield put(forgotPasswordSuccess());
  } catch (error) {
    yield put(forgotPasswordError(error.message));
  }
}

export function* resetPasswordSaga(action: PayloadAction<ResetPasswordParams>) {
  try {
    yield call(requestResetPassword, action.payload);
    yield put(resetPasswordSuccess());
  } catch (error) {
    if (error.response !== undefined) {
      yield put(resetPasswordError(error.response.data));
    } else {
      yield put(resetPasswordError(error.message));
    }
  }
}
