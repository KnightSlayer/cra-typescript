import { put, takeEvery, all } from "redux-saga/effects";
import { AnyAction } from 'redux'
import { asyncDelta, arbitraryDelta } from "./counter";
import { wait } from "services/utils";

function* changeAsync({payload}: AnyAction)  {
  yield wait(1000);
  yield put({
    type: arbitraryDelta.toString(),
    payload,
  });
}

function* watchIncrementAsync() {
  yield takeEvery(asyncDelta.toString(), changeAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
  ]);
}
