import { call, takeEvery, put } from "Redux-Saga/effects";
import {
  fetchNasheeds,
  fetchNasheedsError,
  fetchNasheedsSuccess,
} from "../ducks/nasheedSlice";
import { requestListNasheeds } from "../../services/nasheeds";

export function* fetchNasheedsSaga() {
  try {
    yield put(fetchNasheeds);
    let { results } = yield call(requestListNasheeds);
    yield put(fetchNasheedsSuccess(results));
  } catch (error) {
    console.log(error);
    yield put(fetchNasheedsError(error.response.data));
  }
}
export default function* rootSaga() {
  yield takeEvery(fetchNasheeds, fetchNasheedsSaga);
}
