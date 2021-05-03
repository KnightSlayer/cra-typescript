import { memo } from "react";
import { useRecoilState } from "recoil";
import CounterView from "../CounterView";
import state from "./recoilCounterStore";

const RecoilCounter = () => {
  const [counterState, setCounterState] = useRecoilState(state);

  return <CounterView
    counter={counterState.count}
    decrement={() => setCounterState(s => ({...s, count: s.count - 1}))}
    increment={() => setCounterState(s => ({...s, count: s.count + 1}))}
    changeAsync={() => setCounterState(s => ({...s, count: s.count - 1}))}
    changeBy={(delta) => setCounterState(s => ({...s, count: s.count + delta}))}
    isLoading={counterState.isLoading}
  />
}

export default memo(RecoilCounter);
export { path, subPath } from './path';
