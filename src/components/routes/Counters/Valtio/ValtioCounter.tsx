import { memo } from "react";
import { useSnapshot } from "valtio";
import CounterView from "../CounterView";
import state, { changeAsync } from "./valtioCounterStore";

const ValtioCounter = () => {
  const snapshot = useSnapshot(state);

  return <CounterView
    counter={snapshot.count}
    decrement={() => state.count--}
    increment={() => state.count++}
    changeAsync={changeAsync}
    changeBy={(delta) => state.count += delta}
    isLoading={snapshot.isLoading}
  />
}

export default memo(ValtioCounter);
export { path, subPath } from './path';
