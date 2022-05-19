import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState } from '../../store';

interface User {
  id: string,
  name: string,
  email: string,
  gender: string,
  status: string
}

interface UserState {
  users: User[]
}

const initialState: UserState = {
  users: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UPDATE_USERS: (state, action: PayloadAction<[]>) => {
      return {
        ...state, 
        users: action.payload
      }
    }
  }
});

//reducers

const { actions, reducer } = userSlice;

export default reducer;
