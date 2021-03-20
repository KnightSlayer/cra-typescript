import { createSlice, Action, PayloadAction } from '@reduxjs/toolkit'
import { ThunkAction } from "redux-thunk";
import { TRootState } from "store/rootReducer";
import { fetchDeltaNumber } from "./api";


type TCounterState = {
  value: number,
  isLoading: boolean,
}

const initialState: TCounterState = {
  value: 0,
  isLoading: false,
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
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state, action: PayloadAction<number>) => {
      state.isLoading = false;
      state.value += action.payload;
    },
    sagaAsyncRandom: (state, action: PayloadAction<number>) => {
      state.isLoading = true;
    },
    arbitraryDelta: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  }
})
export const { incremented, sagaAsyncRandom, decremented, arbitraryDelta, finishLoading } = counterSlice.actions;

export default counterSlice.reducer;

type MyThunkType<Return> = ThunkAction<Return, TRootState, unknown, Action<string>>

export const thunkAsyncRandom = (module: number): MyThunkType<Promise<number>> => async dispatch => {
  dispatch(counterSlice.actions.startLoading());
  const delta = await fetchDeltaNumber(module);

  dispatch(counterSlice.actions.finishLoading(delta));

  return delta;
}
