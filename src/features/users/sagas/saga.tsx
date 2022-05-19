import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import counterSaga, { watchIncrementAsync } from '../../counter/sagas/saga';

const axios = require('axios').default;

export const callAPI = async () => {
    return await axios.get('https://gorest.co.in/public/v2/users');
}

// worker

export function* userAsync() {
  //@ts-ignore
  const result = yield call(callAPI)
  console.log(result)
  yield put ({ type: 'user/UPDATE_USERS', payload: result.data});
}

// watcher
export function* watchUserAsync() {
  yield takeEvery('GET_ALL_USERS', userAsync);
}

export default function* userSaga() {
  yield all([
    watchUserAsync()
  ])
}

export function* rootSaga () {
  yield fork(watchIncrementAsync)
  yield fork(watchUserAsync)
  // yield all([
  //     watchIncrementAsync, // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
  //     watchUserAsync,
  // ]);
}