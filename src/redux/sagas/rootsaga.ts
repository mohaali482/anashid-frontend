import { all, takeLatest } from "redux-saga/effects";
import {
  addNasheed,
  fetchMyNasheeds,
  fetchNasheed,
  fetchNasheeds,
  fetchPageNasheeds,
  fetchSavedNasheeds,
  loadMoreNasheeds,
  removeNasheed,
  removeSavedNasheedRequest,
  saveNasheedRequest,
  updateNasheed,
} from "../ducks/nasheedSlice";

import {
  fetchMyNasheedsSaga,
  fetchNasheedSaga,
  fetchNasheedsSaga,
  fetchPageNasheedsSaga,
  fetchSavedNasheedsSaga,
  loadMoreNasheedsSaga,
  removeNasheedSaga,
  removeSavedNasheedSaga,
  requestAddNasheedSaga,
  saveNasheedSaga,
  updateNasheedSaga,
} from "./nasheed-saga";

import {
  changePasswordRequest,
  deleteUserImageRequest,
  deleteUserRequest,
  forgotPasswordRequest,
  loginRequest,
  logoutUser,
  resetPasswordRequest,
  signupUser,
  updateUserRequest,
} from "../ducks/user-slice";
import {
  changePasswordSaga,
  deleteUserImageSaga,
  deleteUserSaga,
  forgotPasswordSaga,
  loginSaga,
  logoutSaga,
  resetPasswordSaga,
  signupUserSaga,
  updateUserSaga,
} from "./user-saga";
import { requestForgotPassword } from "../../services/user";

export default function* rootSaga() {
  yield all([
    takeLatest(loginRequest, loginSaga),
    takeLatest(logoutUser, logoutSaga),

    takeLatest(signupUser, signupUserSaga),

    takeLatest(updateUserRequest, updateUserSaga),
    takeLatest(changePasswordRequest, changePasswordSaga),
    takeLatest(deleteUserRequest, deleteUserSaga),
    takeLatest(deleteUserImageRequest, deleteUserImageSaga),
    takeLatest(forgotPasswordRequest, forgotPasswordSaga),
    takeLatest(resetPasswordRequest, resetPasswordSaga),

    takeLatest(saveNasheedRequest, saveNasheedSaga),
    takeLatest(removeSavedNasheedRequest, removeSavedNasheedSaga),

    takeLatest(fetchNasheed, fetchNasheedSaga),
    takeLatest(fetchMyNasheeds, fetchMyNasheedsSaga),
    takeLatest(fetchSavedNasheeds, fetchSavedNasheedsSaga),
    takeLatest(fetchNasheeds, fetchNasheedsSaga),
    takeLatest(fetchPageNasheeds, fetchPageNasheedsSaga),
    takeLatest(addNasheed, requestAddNasheedSaga),
    takeLatest(updateNasheed, updateNasheedSaga),
    takeLatest(loadMoreNasheeds, loadMoreNasheedsSaga),
    takeLatest(removeNasheed, removeNasheedSaga),
  ]);
}
