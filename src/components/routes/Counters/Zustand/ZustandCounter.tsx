import { memo } from "react";
import CounterView from "../CounterView";
import useCounterStore from "./zustandCounterStore";

const ZustandCounter = () => {
  const state = useCounterStore();

  return <CounterView {...state} />
}

export default memo(ZustandCounter);
export { path, subPath } from './path';
