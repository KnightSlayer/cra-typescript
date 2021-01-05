import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "store/store";
import { incremented, decremented, arbitraryDelta } from "store/reducers/counter/counter"

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: IRootState) => state.counter.value)

  return (
    <div>
      Counter: { value }

      <br/>

      <button onClick={() => dispatch(incremented())}> +1 </button>
      <button onClick={() => dispatch(decremented())}> -1 </button>
      <button onClick={() => dispatch(arbitraryDelta(10))}> +10 </button>
    </div>
  )
}

export default React.memo(Counter);
export { default as path } from './path';

