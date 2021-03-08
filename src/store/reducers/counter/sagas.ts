import { put, takeEvery, call, all } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { sagaAsyncRandom, arbitraryDelta } from "./counter";
import { fetchDeltaNumber } from './api'

function* changeAsync({payload: module}: PayloadAction<number>)  {
  const delta = yield call(fetchDeltaNumber, module);
  yield put({
    type: arbitraryDelta.toString(),
    payload: delta,
  });
}

function* watchIncrementAsync() {
  yield takeEvery(sagaAsyncRandom, changeAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
  ]);
}
