import { memo, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TRootState, AppDispatch } from 'store/store';
import { incremented, sagaAsyncRandom, decremented, arbitraryDelta, thunkAsyncRandom } from "store/reducers/counter/counter"
import CounterView from "../CounterView";

export const ReduxToolKitCounter = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const dispatch: AppDispatch = useDispatch();
  // const dispatch = useAppDispatch();
  const value = useSelector((state: TRootState) => state.counter.value);
  const increment = useCallback(() => dispatch(incremented()), []);
  const decrement = useCallback(() => dispatch(decremented()), []);
  const changeBy = useCallback((delta) => dispatch(arbitraryDelta(delta)), []);
  const changeAsync = useMemo(() => [
    {
      func: (module: number) => dispatch(sagaAsyncRandom(module)),
      label: 'async saga',
    },
    {
      func: async (module: number) => {
        const randomDelta: number = await dispatch(thunkAsyncRandom(module));
        console.log(`random was ${randomDelta}`); // saga can't get fetched data here
      },
      label: 'async thunk',
    },
  ], []);

  return (
    <CounterView
      counter={value}
      increment={increment}
      decrement={decrement}
      changeBy={changeBy}
      changeAsync={changeAsync}
    />
  )
}

export default memo(ReduxToolKitCounter);
export { path, subPath } from './path';
