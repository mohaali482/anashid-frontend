import { all, takeLatest } from "redux-saga/effects";
import {
  addNasheed,
  fetchMyNasheeds,
  fetchNasheed,
  fetchNasheeds,
  fetchPageNasheeds,
  fetchSavedNasheeds,
  loadMoreNasheeds,
  removeSavedNasheedRequest,
  saveNasheedRequest,
} from "../ducks/nasheedSlice";

import {
  fetchMyNasheedsSaga,
  fetchNasheedSaga,
  fetchNasheedsSaga,
  fetchPageNasheedsSaga,
  fetchSavedNasheedsSaga,
  loadMoreNasheedsSaga,
  removeSavedNasheedSaga,
  requestAddNasheedSaga,
  saveNasheedSaga,
} from "./nasheed-saga";

import {
  changePasswordRequest,
  deleteUserImageRequest,
  deleteUserRequest,
  loginRequest,
  logoutUser,
  updateUserRequest,
} from "../ducks/user-slice";
import {
  changePasswordSaga,
  deleteUserImageSaga,
  deleteUserSaga,
  loginSaga,
  logoutSaga,
  updateUserSaga,
} from "./user-saga";

export default function* rootSaga() {
  yield all([
    takeLatest(loginRequest, loginSaga),
    takeLatest(logoutUser, logoutSaga),
    takeLatest(updateUserRequest, updateUserSaga),
    takeLatest(changePasswordRequest, changePasswordSaga),
    takeLatest(deleteUserRequest, deleteUserSaga),
    takeLatest(deleteUserImageRequest, deleteUserImageSaga),

    takeLatest(saveNasheedRequest, saveNasheedSaga),
    takeLatest(removeSavedNasheedRequest, removeSavedNasheedSaga),

    takeLatest(fetchNasheed, fetchNasheedSaga),
    takeLatest(fetchMyNasheeds, fetchMyNasheedsSaga),
    takeLatest(fetchSavedNasheeds, fetchSavedNasheedsSaga),
    takeLatest(fetchNasheeds, fetchNasheedsSaga),
    takeLatest(fetchPageNasheeds, fetchPageNasheedsSaga),
    takeLatest(addNasheed, requestAddNasheedSaga),
    takeLatest(loadMoreNasheeds, loadMoreNasheedsSaga),
  ]);
}