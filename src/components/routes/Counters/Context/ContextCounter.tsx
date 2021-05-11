import { memo, useContext } from "react";
import CounterView from "../CounterView";
import CounterContext from "./counterContext";

const ContextCounter = memo(() => {
  const state = useContext(CounterContext);

  return <CounterView {...state} />
})

export default ContextCounter
export { path, subPath } from './path';
