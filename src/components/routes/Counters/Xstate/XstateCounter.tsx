import { memo } from "react";
import { useMachine } from "@xstate/react";
import { fetchDeltaNumber } from "store/reducers/counter/api";
import counterMachine, { MachineStates, MachineActions} from './xstateCounterStore'
import CounterView from "../CounterView";


const XstateCounter = () => {
  const [current, send] = useMachine(counterMachine);
  const {context: {count}, value} = current;

  return <CounterView
    isLoading={value === MachineStates.LOADING}
    counter={count}
    changeAsync={async (module) => {
      send(MachineActions.LOAD_START);
      try {
        const delta = await fetchDeltaNumber(module);
        send({type: MachineActions.LOAD_SUCCESS, value: delta});
      } catch (err) {
        send(MachineActions.LOAD_FAILURE);
      }
    }}
    increment={() => send({type: MachineActions.CHANGE, value: 1})}
    decrement={() => send({type: MachineActions.CHANGE, value: -1})}
    changeBy={(delta) => send({type: MachineActions.CHANGE, value: delta})}
  />
}


export default memo(XstateCounter);
export { path, subPath } from './path';
