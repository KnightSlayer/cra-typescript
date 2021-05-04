import { atom } from "recoil";
import { fetchDeltaNumber } from "store/reducers/counter/api";


type TRecoilCounterState = {
  count: number
  isLoading: boolean
}


const stateId = 'recoilCounterState';
const state = atom({
  key: stateId,
  default: {
    count: 0,
    isLoading: false,
  },
});

type TSetState = (newState: (currentState: TRecoilCounterState) => TRecoilCounterState) => void

export const changeAsync = async (module: number, {state, setState}: {state: TRecoilCounterState, setState: TSetState}) => {
  setState(s => ({...s, isLoading: true}));
  const delta = await fetchDeltaNumber(module);
  setState(s => ({...s, isLoading: false, count: s.count + delta}));
}

export default state
