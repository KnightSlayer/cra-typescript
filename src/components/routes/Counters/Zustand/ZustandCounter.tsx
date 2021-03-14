import { memo } from "react";
import create from 'zustand'
import { fetchDeltaNumber } from "store/reducers/counter/api";
import CounterView from "../CounterView";

type TState = {
  counter: number
  increment: () => void
  decrement: () => void
  changeBy: (by: number) => void
  changeAsync: (module: number) => void
}

const useStore = create<TState>((set, get) => ({
  counter: 0,
  increment: () => set(state => ({ counter: state.counter + 1 })),
  decrement: () => set(state => ({ counter: state.counter - 1 })),
  changeBy: (delta: number) => set(state => ({ counter: state.counter + delta })),
  changeAsync: async (module: number) => {
    const delta = await fetchDeltaNumber(module);
    // option 1
    // set(state => ({ counter: state.counter + delta }));
    // option 2
    get().changeBy(delta);
  },
}));

const ZustandCounter = () => {
  const state = useStore();

  return <CounterView {...state} />
}

export default memo(ZustandCounter);
export { path, subPath } from './path';
