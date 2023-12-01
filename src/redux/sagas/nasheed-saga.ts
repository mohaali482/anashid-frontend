import { call, put, select } from "redux-saga/effects";
import {
  addNasheedError,
  addNasheedSuccess,
  fetchNasheedError,
  fetchNasheedSuccess,
  fetchNasheedsError,
  fetchNasheedsSuccess,
  loadMoreNasheedsError,
  loadMoreNasheedsSuccess,
  removeSavedNasheedError,
  removeSavedNasheedSuccess,
  saveNasheedError,
  saveNasheedSuccess,
} from "../ducks/nasheedSlice";
import {
  requestAddNasheed,
  requestListNasheeds,
  requestMyNasheeds,
  requestNasheed,
  requestPageNasheeds,
  requestRemoveSavedNasheed,
  requestSaveNasheed,
  requestSavedNasheeds,
} from "../../services/nasheeds";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Nasheed, Response } from "../../types/nasheed-store";

export function* fetchNasheedsSaga() {
  try {
    const limit: number = yield select(
      (state: RootState) => state.nasheeds.limit
    );
    const query: string = yield select(
      (state: RootState) => state.nasheeds.query
    );
    let result: Response = yield call(requestListNasheeds, limit, query);
    yield put(fetchNasheedsSuccess(result));
  } catch (error) {
    if (error.response) {
      yield put(fetchNasheedsError(error.response.data));
    } else {
      yield put(fetchNasheedError(error.message));
    }
  }
}

export function* fetchMyNasheedsSaga() {
  try {
    const limit: number = yield select(
      (state: RootState) => state.nasheeds.limit
    );
    const query: string = yield select(
      (state: RootState) => state.nasheeds.query
    );
    let result: Response = yield call(requestMyNasheeds, limit, query);
    yield put(fetchNasheedsSuccess(result));
  } catch (error) {
    if (error.response) {
      yield put(fetchNasheedsError(error.response.data));
    } else {
      yield put(fetchNasheedError(error.message));
    }
  }
}

export function* fetchSavedNasheedsSaga() {
  try {
    const limit: number = yield select(
      (state: RootState) => state.nasheeds.limit
    );
    const query: string = yield select(
      (state: RootState) => state.nasheeds.query
    );
    let result: Response = yield call(requestSavedNasheeds, limit, query);
    yield put(fetchNasheedsSuccess(result));
  } catch (error) {
    if (error.response) {
      yield put(fetchNasheedsError(error.response.data));
    } else {
      yield put(fetchNasheedError(error.message));
    }
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
    let result: Response = yield call(requestPageNasheeds, link);
    yield put(fetchNasheedsSuccess(result));
  } catch (error) {
    yield put(fetchNasheedsError(error.response.data));
  }
}

export function* requestAddNasheedSaga(action: PayloadAction<FormData>) {
  try {
    let { data } = yield call(requestAddNasheed, action.payload);
    yield put(addNasheedSuccess(data));
  } catch (error) {
    yield put(addNasheedError(error.response.data));
  }
}

export function* fetchNasheedSaga(action: PayloadAction<number>) {
  try {
    let { data } = yield call(requestNasheed, action.payload);
    yield put(fetchNasheedSuccess(data));
  } catch (error) {
    yield put(fetchNasheedError(error.response.data));
  }
}

export function* loadMoreNasheedsSaga() {
  try {
    let link: string = yield select((state: RootState) => state.nasheeds.next);
    let result: Response = yield call(requestPageNasheeds, link);
    yield put(loadMoreNasheedsSuccess(result));
  } catch (error) {
    yield put(loadMoreNasheedsError(error.response.data));
  }
}

export function* saveNasheedSaga(action: PayloadAction<number>) {
  try {
    const response: Nasheed = yield call(requestSaveNasheed, action.payload);
    yield put(saveNasheedSuccess(response));
  } catch (error) {
    yield put(saveNasheedError(error.response.data));
  }
}

export function* removeSavedNasheedSaga(action: PayloadAction<number>) {
  try {
    yield call(requestRemoveSavedNasheed, action.payload);
    yield put(removeSavedNasheedSuccess(action.payload));
  } catch (error) {
    yield put(removeSavedNasheedError(error.response.data));
  }
}
