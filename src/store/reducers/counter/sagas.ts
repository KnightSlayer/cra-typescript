import { put, takeEvery, call, all } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { sagaAsyncRandom, finishLoading } from "./counter";
import { fetchDeltaNumber } from './api'

export function* changeAsync({payload: module}: PayloadAction<number>)  {
  const delta = yield call(fetchDeltaNumber, module);
  yield put({
    type: finishLoading.toString(),
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
