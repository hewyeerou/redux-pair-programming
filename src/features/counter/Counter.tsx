import { useAppSelector } from "./hooks/hooks";
import { useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./reducers/counterSlice";
import { createAction } from "@reduxjs/toolkit";

export const asyncIncrement = createAction('INCREMENT_ASYNC');

const Counter = () =>  {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  return (
    <div className="container">
      <div className="number">
        {count}
      </div>
      <button className="increment-button" onClick={() => dispatch({type: 'counter/increment'})}>+</button>
      <button className="decrement-button" onClick={() => dispatch(decrement())}>-</button>
      <button className="increment-async-button" onClick={() => dispatch({type: 'INCREMENT_ASYNC'})}>Async +</button>
    </div>
  )
}

export default Counter;