import { memo } from "react";
import { StoreProvider, useStoreState, useStoreActions } from 'easy-peasy';
import CounterView from "../CounterView";
import counterStore, { ICounterModel } from "./easyPeasyStore";

const EasyPeasyCounter = memo(() => {
  const state = useStoreState<ICounterModel>(state => state);
  const actions = useStoreActions<ICounterModel>(actions => actions);

  return <CounterView {...state} {...actions} />
})

export default () => (
  <StoreProvider store={counterStore}>
    <EasyPeasyCounter />
  </StoreProvider>
)
export { path, subPath } from './path';
