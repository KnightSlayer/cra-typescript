import { atom } from 'jotai'
import { fetchDeltaNumber } from "store/reducers/counter/api";


type TJotaiCounterState = {
  count: number
  isLoading: boolean
}

const state = atom({
  count: 0,
  isLoading: false,
});

type TSetState = (newState: (currentState: TJotaiCounterState) => TJotaiCounterState) => void

export const changeAsync = async (module: number, {state, setState}: {state: TJotaiCounterState, setState: TSetState}) => {
  setState(s => ({...s, isLoading: true}));
  const delta = await fetchDeltaNumber(module);
  setState(s => ({...s, isLoading: false, count: s.count + delta}));
}

export default state
