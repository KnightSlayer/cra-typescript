import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { fetchDeltaNumber } from "store/reducers/counter/api";

const state = proxy({ count: 0, isLoading: false })
devtools(state, 'valtio counter state')

export default state;

export const changeAsync = async (module: number) => {
  state.isLoading = true;
  const delta = await fetchDeltaNumber(module);
  state.isLoading = false;
  state.count += delta;

  return delta;
}
