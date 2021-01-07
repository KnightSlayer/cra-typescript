import React from 'react';
import { useSelector } from "react-redux";
import { useAppDispatch, TRootState } from 'store/store';
import { incremented, decremented, arbitraryDelta, randomShift } from "store/reducers/counter/counter"

const Counter = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const dispatch: AppDispatch = useDispatch();
  const dispatch = useAppDispatch();
  const value = useSelector((state: TRootState) => state.counter.value);

  return (
    <div>
      Counter: { value }

      <br/>

      <button onClick={() => dispatch(incremented())}> +1 </button>
      <button onClick={() => dispatch(decremented())}> -1 </button>
      <button onClick={() => dispatch(arbitraryDelta(10))}> +10 </button>
      <button onClick={async () => {
        const randomDelta: number = await dispatch(randomShift(10));
        console.log(`random was ${randomDelta}`);
      }}> ? </button>
    </div>
  )
}

export default React.memo(Counter);
export { default as path } from './path';

