import { call, takeEvery, put, select } from "Redux-Saga/effects";
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
import { RootState } from "../store";

export function* fetchNasheedsSaga() {
  try {
    yield put(fetchNasheeds);
    const limit = yield select((state: RootState) => state.nasheeds.limit);
    let result = yield call(requestListNasheeds, limit);
    yield put(fetchNasheedsSuccess(result));
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
