import { proxy } from 'valtio'
import { fetchDeltaNumber } from "store/reducers/counter/api";

const state = proxy({ count: 0, isLoading: false })

export default state;

export const changeAsync = async (module: number) => {
  state.isLoading = true;
  const delta = await fetchDeltaNumber(module);
  state.isLoading = false;
  state.count += delta;

  return delta;
}
