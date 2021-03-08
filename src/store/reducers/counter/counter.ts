import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit'
import { ThunkAction } from "redux-thunk";
import { TRootState } from "store/rootReducer";
import { wait } from "services/utils";

type TCounterState = {
  value: number,
}

const initialState: TCounterState = {
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
    asyncDelta: (state, action: PayloadAction<number>) => state,
    arbitraryDelta: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
})
export const { incremented, asyncDelta, decremented, arbitraryDelta } = counterSlice.actions;

export default counterSlice.reducer;

type MyThunkType<Return> = ThunkAction<Return, TRootState, unknown, Action<string>>

export const randomShift = (module: number): MyThunkType<Promise<number>> => async dispatch => {
  await wait(1111);
  const delta = Math.round(Math.random() * 2 * module - module);

  dispatch(arbitraryDelta(delta));

  return delta;
}
