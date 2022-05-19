import { all, put, takeEvery } from 'redux-saga/effects';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// worker
export function* incrementAsync() {
  // console.time("start");
  yield delay(1000);
  // console.timeEnd("start");
  yield put ({ type: 'counter/increment' });
}

// watcher
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}