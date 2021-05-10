import { memo } from "react";
import { useAtom } from 'jotai'
import CounterView from "../CounterView";
import state, { changeAsync } from "./jotaiCounterStore";

const RecoilCounter = () => {
  const [counterState, setCounterState] = useAtom(state);

  return <CounterView
    counter={counterState.count}
    decrement={() => setCounterState(s => ({...s, count: s.count - 1}))}
    increment={() => setCounterState(s => ({...s, count: s.count + 1}))}
    changeAsync={(module) => changeAsync(module, ({state: counterState, setState: setCounterState}))}
    changeBy={(delta) => setCounterState(s => ({...s, count: s.count + delta}))}
    isLoading={counterState.isLoading}
  />
}

export default memo(RecoilCounter);
export { path, subPath } from './path';
