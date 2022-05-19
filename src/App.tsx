import "./App.css";
import Counter from "./features/counter/Counter";

import createSagaMiddleware from "redux-saga";
import { counterSlice } from "./features/counter/counterSlice";
import rootSaga from "./saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: counterSlice.reducer,
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
