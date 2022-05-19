import "./App.css";
import Counter from "./features/counter/Counter";

import createSagaMiddleware from "redux-saga";
import { counterSlice } from "./features/counter/reducers/counterSlice";
import counterSaga from "./features/counter/sagas/saga";
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Users from "./features/users/Users";
import {userSlice} from "./features/users/reducers/userSlice";
import userSaga, { rootSaga } from "./features/users/sagas/saga";


const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({user: userSlice.reducer, counter: counterSlice.reducer})
export const store = configureStore({
  reducer: reducers,
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
  devTools: true,
});


sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

function App() {
  return (
    <div className="App">
      <Counter
      // count={store.getState().value}
      // increment={() => action("INCREMENT")}
      // decrement={() => action("DECREMENT")}
      />
      <Users/>
    </div>
  );
}

export default App;

// export const store = createStore(
//   counterSlice.reducer,
//   applyMiddleware(sagaMiddleware)
// );
// sagaMiddleware.run(rootSaga);

// const action = (type: string) => store.dispatch({ type });
// const sagaMiddleware = saga();
