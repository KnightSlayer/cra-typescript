import { configureStore } from '@reduxjs/toolkit';
import counter, { ICounter } from "./reducers/counter/counter";

export interface IRootState {
  counter: ICounter,
}

const createStore = (preloadedState: IRootState) => {
  return configureStore({
    reducer: {
      counter,
    },
    middleware: [],
    devTools: process.env.NODE_ENV === 'development',
    preloadedState,
    enhancers: [],
  })
}

export default createStore;
