import create, { State, StateCreator, UseStore } from 'zustand'
import { devtools } from 'zustand/middleware'
import produce, { Draft } from 'immer'

import { fetchDeltaNumber } from "store/reducers/counter/api";

type TState = {
  counter: number
  isLoading: boolean
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
  isLoading: false,
  increment: () => set(state => ({ counter: state.counter + 1 })),
  decrement: () => set(state => ({ counter: state.counter - 1 })),
  changeBy: (delta: number) => set(state => ({ counter: state.counter + delta })),
  changeAsync: async (module: number) => {
    set(() => ({isLoading: true}));
    const delta = await fetchDeltaNumber(module);
    set(state => ({
      counter: state.counter + delta,
      isLoading: false,
    }));
  },
}));

export default useStore
