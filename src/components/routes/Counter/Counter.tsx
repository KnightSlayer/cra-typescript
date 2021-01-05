import React from 'react';
import { IRootState } from "store/createStore";
import { useDispatch, useSelector } from "react-redux";
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

export default Counter;
export { default as path } from './path';

