import { createStore, action, thunk , Action, Thunk } from 'easy-peasy';
import { fetchDeltaNumber } from "store/reducers/counter/api";


export interface ICounterModel {
  counter: number;
  isLoading: boolean;
  increment: Action<ICounterModel>;
  decrement: Action<ICounterModel>;
  changeBy: Action<ICounterModel, number>;
  changeAsync: Thunk<ICounterModel, number>;
  setIsLoading: Action<ICounterModel, boolean>;
}

const store = createStore<ICounterModel>({
  counter: 0,
  isLoading: false,
  increment: action((state) => {
    state.counter++;
  }),
  decrement: action((state) => {
    state.counter--;
  }),
  changeBy: action((state, delta) => {
    state.counter += delta;
  }),
  changeAsync: thunk(async (actions, module) => {
    actions.setIsLoading(true);
    const delta = await fetchDeltaNumber(module);
    actions.changeBy(delta);
    actions.setIsLoading(false);
    return delta
  }),
  setIsLoading: action((state, isLoading) => {
    state.isLoading = isLoading;
  }),
});

export default store;
