import { createStore, createEvent, createEffect } from 'effector';
import { fetchDeltaNumber } from "store/reducers/counter/api";


const increment = createEvent();
const decrement = createEvent();
const changeBy = createEvent<number>();
// const changeAsync = createEvent();

const changeAsync = createEffect(async (module: number): Promise<number> => {
  const delta = await fetchDeltaNumber(module)
  return delta
})

export const actions = {
  increment,
  decrement,
  changeBy,
  changeAsync,
}

const counterStore = createStore({
  counter: 0,
  isLoading: false
})
  .on(increment, state => ({
    ...state,
    counter: state.counter + 1,
  }))
  .on(decrement, state => ({
    ...state,
    counter: state.counter - 1,
  }))
  .on(changeBy, (state, delta: number) => ({
    ...state,
    counter: state.counter + delta,
  }))
  .on(changeAsync.pending, (state, isLoading) => ({
    ...state,
    isLoading,
  }))
  .on(changeAsync.doneData, (state, delta) => ({
    ...state,
    counter: state.counter + delta,
  }))

counterStore.watch(console.log.bind(null, 'counterStore update'))

export default counterStore;
