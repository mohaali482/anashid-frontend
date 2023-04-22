import { call, takeEvery, put, select } from "Redux-Saga/effects";
import {
  addNasheed,
  addNasheedError,
  addNasheedSuccess,
  fetchNasheed,
  fetchNasheedError,
  fetchNasheedSuccess,
  fetchNasheeds,
  fetchNasheedsError,
  fetchNasheedsSuccess,
  fetchPageNasheeds,
  loadMoreNasheeds,
  loadMoreNasheedsError,
  loadMoreNasheedsSuccess,
} from "../ducks/nasheedSlice";
import {
  requestAddNasheed,
  requestListNasheeds,
  requestNasheed,
  requestPageNasheeds,
} from "../../services/nasheeds";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Response } from "../../types";

export function* fetchNasheedsSaga() {
  try {
    yield put(fetchNasheeds);
    const limit: number = yield select(
      (state: RootState) => state.nasheeds.limit
    );
    let result: Response = yield call(requestListNasheeds, limit);
    yield put(fetchNasheedsSuccess(result));
  } catch (error) {
    yield put(fetchNasheedsError(error.response.data));
  }
}

export function* fetchPageNasheedsSaga(action: PayloadAction<string>) {
  try {
    let link: string;
    if (action.payload === "previous") {
      link = yield select((state: RootState) => state.nasheeds.previous);
    } else {
      link = yield select((state: RootState) => state.nasheeds.next);
    }
    yield put(fetchNasheeds);
    let result: Response = yield call(requestPageNasheeds, link);
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

export function* fetchNasheedSaga(action: PayloadAction<number>) {
  try {
    yield put(fetchNasheed);
    let { data } = yield call(requestNasheed, action.payload);
    yield put(fetchNasheedSuccess(data));
  } catch (error) {
    yield put(fetchNasheedError(error.response.data));
  }
}

export function* loadMoreNasheedsSaga() {
  try {
    let link: string = yield select((state: RootState) => state.nasheeds.next);
    yield put(loadMoreNasheeds);
    let result: Response = yield call(requestPageNasheeds, link);
    yield put(loadMoreNasheedsSuccess(result));
  } catch (error) {
    yield put(loadMoreNasheedsError(error.response.data));
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchNasheed, fetchNasheedSaga);
  yield takeEvery(fetchNasheeds, fetchNasheedsSaga);
  yield takeEvery(fetchPageNasheeds, fetchPageNasheedsSaga);
  yield takeEvery(addNasheed, requestAddNasheedSaga);
  yield takeEvery(loadMoreNasheeds, loadMoreNasheedsSaga);
}
