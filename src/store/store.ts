import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: [],
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: (window as any).__REDUX_INITIAL_STATE__,
  enhancers: [],
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    console.log('hot replacement of root reducer')
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  });
}

export type AppDispatch = typeof store.dispatch

export default store;
