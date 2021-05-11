import { makeAutoObservable, flow } from 'mobx';
import { fetchDeltaNumber } from "store/reducers/counter/api";

class CounterState {
  count = 0;
  isLoading = false;

  constructor() {
    makeAutoObservable(
      this,
      {changeAsync: flow.bound},
      {autoBind: true, proxy: false},
    )
  }

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  changeBy(delta: number) {
    this.count += delta;
  }
  *changeAsync(module: number) {
    this.isLoading = true;
    const delta = yield fetchDeltaNumber(module);
    this.isLoading = false;
    this.count += delta;
  }
}

export default CounterState

export const mobxCounterState = new CounterState()
