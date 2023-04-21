import { call, takeEvery, put, select } from "Redux-Saga/effects";
import {
  addNasheed,
  addNasheedError,
  addNasheedSuccess,
  fetchNasheeds,
  fetchNasheedsError,
  fetchNasheedsSuccess,
  fetchPageNasheeds,
} from "../ducks/nasheedSlice";
import {
  requestAddNasheed,
  requestListNasheeds,
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

export default function* rootSaga() {
  yield takeEvery(fetchNasheeds, fetchNasheedsSaga);
  yield takeEvery(fetchPageNasheeds, fetchPageNasheedsSaga);
  yield takeEvery(addNasheed, requestAddNasheedSaga);
}
