import { memo } from "react";
import { useStore } from 'effector-react';
import CounterView from "../CounterView";
import counterStore, { actions } from "./effectorStore";


const EffectorCounter = () => {
  const { counter, isLoading } = useStore(counterStore);

  return <CounterView
    counter={counter}
    increment={actions.increment}
    decrement={actions.decrement}
    changeBy={actions.changeBy}
    changeAsync={actions.changeAsync}
    isLoading={isLoading}
  />
}

export default memo(EffectorCounter);
export { path, subPath } from './path';
