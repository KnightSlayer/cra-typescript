import { memo } from "react";
import { useAtom } from 'jotai'
import { useAtomDevtools } from 'jotai/devtools'
import CounterView from "../CounterView";
import counterAtom, { changeAsync, /*changeAsyncAtom*/ } from "./jotaiCounterStore";

const JotaiCounter = () => {
  const [counterState, setCounterState] = useAtom(counterAtom);
  useAtomDevtools(counterAtom, 'Jotai Counter Atom');
  // const [,setCounterStateAsync] = useAtom(changeAsyncAtom);

  return <CounterView
    counter={counterState.count}
    decrement={() => setCounterState(s => ({...s, count: s.count - 1}))}
    increment={() => setCounterState(s => ({...s, count: s.count + 1}))}
    changeAsync={(module) => changeAsync(module, ({state: counterState, setState: setCounterState}))}
    // changeAsync={(module) => setCounterStateAsync(module)}
    changeBy={(delta) => setCounterState(s => ({...s, count: s.count + delta}))}
    isLoading={counterState.isLoading}
  />
}

export default memo(JotaiCounter);
export { path, subPath } from './path';
