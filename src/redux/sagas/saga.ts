import { call, takeEvery, put } from "Redux-Saga/effects";
import {
  addNasheed,
  addNasheedError,
  addNasheedSuccess,
  fetchNasheeds,
  fetchNasheedsError,
  fetchNasheedsSuccess,
} from "../ducks/nasheedSlice";
import {
  requestAddNasheed,
  requestListNasheeds,
} from "../../services/nasheeds";
import { PayloadAction } from "@reduxjs/toolkit";

export function* fetchNasheedsSaga() {
  try {
    yield put(fetchNasheeds);
    let { results } = yield call(requestListNasheeds);
    yield put(fetchNasheedsSuccess(results));
  } catch (error) {
    yield put(fetchNasheedsError(error.response.data));
  }
}

export function* requestAddNasheedSaga(action: PayloadAction<FormData>) {
  try {
    yield put(addNasheed);
    let { data } = yield call(requestAddNasheed, action.payload);
    yield put(addNasheedSuccess(data));
  } catch (error) {
    yield put(addNasheedError(error.response.data));
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchNasheeds, fetchNasheedsSaga);
  yield takeEvery(addNasheed, requestAddNasheedSaga);
}
