import { memo } from "react";
import create, { State, StateCreator, UseStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import produce, { Draft } from 'immer'

import { fetchDeltaNumber } from "store/reducers/counter/api";
import CounterView from "../CounterView";

type TState = {
  counter: number
  increment: () => void
  decrement: () => void
  changeBy: (by: number) => void
  changeAsync: (module: number) => void
}
type TImmerStateCreator<T extends State> = StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
// here is no nested objects so it is useless here
const immer = <T extends State>(
  config: TImmerStateCreator<T>
): StateCreator<T> => (set, get, api) =>
  config((fn) => set(produce(fn) as (state: T) => T), get, api)

const createStore = <TState extends State>(
  createState: TImmerStateCreator<TState>
): UseStore<TState> => create(devtools(immer(createState), 'ZustandCounter'))

const useStore = createStore<TState>((set, get) => ({
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
