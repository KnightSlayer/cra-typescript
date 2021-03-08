import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TRootState, AppDispatch } from 'store/store';
import { incremented, asyncDelta, decremented, arbitraryDelta, thunkAsyncRandom } from "store/reducers/counter/counter"

function getRandomNumberInModule (module: number): number {
  return Math.round(Math.random() * 2 * module - module);
}

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const dispatch: AppDispatch = useDispatch();
  // const dispatch = useAppDispatch();
  const value = useSelector((state: TRootState) => state.counter.value);

  return (
    <div>
      Counter: { value }

      <br/>

      <button onClick={() => dispatch(incremented())}> +1 </button>
      <button onClick={() => dispatch(decremented())}> -1 </button>
      <button onClick={() => dispatch(arbitraryDelta(10))}> +10 </button>
      <button onClick={() => {
        const sagaResp = dispatch(asyncDelta(getRandomNumberInModule(20)));
        console.log('sagaResp', sagaResp);
      }}> async saga ? </button>
      <button onClick={async () => {
        const randomDelta: number = await dispatch(thunkAsyncRandom(10));
        console.log(`random was ${randomDelta}`);
      }}> async thunk ? </button>
    </div>
  )
}

export default React.memo(Counter);
export { default as path } from './path';

