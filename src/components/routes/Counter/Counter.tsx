import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "store/rootReducer";
import { incremented, decremented, arbitraryDelta, randomShift } from "store/reducers/counter/counter"

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: TRootState) => state.counter.value)

  return (
    <div>
      Counter: { value }

      <br/>

      <button onClick={() => dispatch(incremented())}> +1 </button>
      <button onClick={() => dispatch(decremented())}> -1 </button>
      <button onClick={() => dispatch(arbitraryDelta(10))}> +10 </button>
      <button onClick={async () => {
        const randomDelta = await dispatch(randomShift(10))
        console.log(`random was ${randomDelta}`)
      }}> ? </button>
    </div>
  )
}

export default React.memo(Counter);
export { default as path } from './path';

