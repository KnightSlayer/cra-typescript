import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
    arbitraryDelta: (state, action: {type: string, payload: number}) => {
      state.value += action.payload;
    },
  }
})

export const { incremented, decremented, arbitraryDelta } = counterSlice.actions;

export default counterSlice.reducer;
