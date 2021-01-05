import { createSlice, PayloadAction  } from '@reduxjs/toolkit'

type TCounter = {
  value: number,
}

const initialState: TCounter = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      state.value += 1;
    },
    decremented: state => {
      state.value -= 1;
    },
    arbitraryDelta: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
})

export const { incremented, decremented, arbitraryDelta } = counterSlice.actions;

export default counterSlice.reducer;
