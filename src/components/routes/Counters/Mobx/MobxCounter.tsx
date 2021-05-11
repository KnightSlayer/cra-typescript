import { memo } from "react";
import { observer } from "mobx-react-lite"
import CounterView from "../CounterView";
import CounterState, { mobxCounterState } from "./mobxCounterStore";


const MobxCounter = memo(observer(({state}: {state: CounterState}) => (
  <CounterView
    counter={state.count}
    increment={(state.increment)}
    decrement={state.decrement}
    changeBy={state.changeBy}
    changeAsync={state.changeAsync}
    isLoading={state.isLoading}
  />
)))

const MobxCounterWithState = () => <MobxCounter state={mobxCounterState} />

export default MobxCounterWithState;

export { path, subPath } from './path';
