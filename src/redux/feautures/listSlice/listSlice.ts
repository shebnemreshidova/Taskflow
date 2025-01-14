import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListState {
  value: number;
}

const initialState: ListState = {
  value: 0,
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = listSlice.actions;
export default listSlice.reducer;
