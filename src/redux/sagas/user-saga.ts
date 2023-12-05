import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import {
  changePasswordError,
  changePasswordSuccess,
  deleteUserError,
  deleteUserImageError,
  deleteUserImageSuccess,
  deleteUserSuccess,
  loginError,
  loginSuccess,
  setAccessToken,
  updateUserError,
  updateUserSuccess,
} from "../ducks/user-slice";
import {
  requestChangePassword,
  requestLogin,
  requestLogout,
  requestPersonalInfo,
  requestUserDelete,
  requestUserImageDelete,
  requestUserUpdate,
} from "../../services/user";
import { LoginResponse, User } from "../../types/user-store";

export function* loginSaga(action: PayloadAction<FormData>) {
  try {
    let data: LoginResponse = yield call(requestLogin, action.payload);
    yield put(setAccessToken(data.access));
    let user: User = yield call(requestPersonalInfo);
    yield put(loginSuccess(user));
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
