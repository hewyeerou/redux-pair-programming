import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../store';

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
});

//reducers
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

const { actions, reducer } = counterSlice;

export default reducer;
