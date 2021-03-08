import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TRootState, AppDispatch } from 'store/store';
import { incremented, sagaAsyncRandom, decremented, arbitraryDelta, thunkAsyncRandom } from "store/reducers/counter/counter"

const MODULE_OF_RANDOM = 20;

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
      <button onClick={() => dispatch(sagaAsyncRandom(MODULE_OF_RANDOM))}> async saga ? </button>
      <button onClick={async () => {
        const randomDelta: number = await dispatch(thunkAsyncRandom(MODULE_OF_RANDOM));
        console.log(`random was ${randomDelta}`); // saga can't get fetched data here
      }}> async thunk ? </button>
    </div>
  )
}

export default React.memo(Counter);
export { default as path } from './path';

