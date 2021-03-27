import { memo } from "react";
import { useMachine } from "@xstate/react";
import { fetchDeltaNumber } from "store/reducers/counter/api";
import counterMachine, { MachineStates, MachineEvents} from './xstateCounterStore'
import CounterView from "../CounterView";


const XstateCounter = () => {
  const [current, send] = useMachine(counterMachine);
  const {context: {count}, value} = current;

  return <CounterView
    isLoading={value === MachineStates.LOADING}
    counter={count}
    changeAsync={async (module) => {
      send(MachineEvents.LOAD_START);
      try {
        const delta = await fetchDeltaNumber(module);
        send({type: MachineEvents.LOAD_SUCCESS, value: delta});
      } catch (err) {
        send(MachineEvents.LOAD_FAILURE);
      }
    }}
    increment={() => send({type: MachineEvents.CHANGE, value: 1})}
    decrement={() => send({type: MachineEvents.CHANGE, value: -1})}
    changeBy={(delta) => send({type: MachineEvents.CHANGE, value: delta})}
  />
}


export default memo(XstateCounter);
export { path, subPath } from './path';
