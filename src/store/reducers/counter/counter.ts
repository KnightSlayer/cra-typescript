import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit'
import { ThunkAction } from "redux-thunk";
import { TRootState } from "store/rootReducer";
import { fetchDeltaNumber } from "./api";


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
    sagaAsyncRandom: (state,
                 action: PayloadAction<number>) => state,
    arbitraryDelta: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
})
export const { incremented, sagaAsyncRandom, decremented, arbitraryDelta } = counterSlice.actions;

export default counterSlice.reducer;

type MyThunkType<Return> = ThunkAction<Return, TRootState, unknown, Action<string>>

export const thunkAsyncRandom = (module: number): MyThunkType<Promise<number>> => async dispatch => {
  const delta = await fetchDeltaNumber(module);

  dispatch(arbitraryDelta(delta));

  return delta;
}
