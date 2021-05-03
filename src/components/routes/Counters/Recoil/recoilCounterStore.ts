import { atom } from "recoil";


const stateId = 'recoilCounterState';
const state = atom({
  key: stateId,
  default: {
    count: 0,
    isLoading: false,
  },
});

export default state
