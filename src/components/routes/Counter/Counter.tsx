import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "store/store";
import { incremented, decremented } from "store/reducers/counter/counter"

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: IRootState) => state.counter.value)

  return (
    <div>
      Counter: { value }

      <br/>

      <button onClick={() => dispatch(incremented())}> Increment </button>
      <button onClick={() => dispatch(decremented())}> Decrement </button>
    </div>
  )
}

export default React.memo(Counter);
export { default as path } from './path';

