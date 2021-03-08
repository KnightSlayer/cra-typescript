import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .prepend(sagaMiddleware)
      // .concat(logger)
  },
  devTools: process.env.NODE_ENV === 'development',
  preloadedState: (window as any).__REDUX_INITIAL_STATE__,
  // enhancers: [],
})
  sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    console.log('hot replacement of root reducer')
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  });
}

export type { TRootState } from './rootReducer';
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
