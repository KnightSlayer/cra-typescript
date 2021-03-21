import { memo } from "react";
import { useMachine } from "@xstate/react";
import { fetchDeltaNumber } from "store/reducers/counter/api";
import counterMachine, { MachineStates, MachineTransitions} from './xstateCounterStore'
import CounterView from "../CounterView";


const XstateCounter = () => {
  const [current, send] = useMachine(counterMachine);
  const {context: {count}, value} = current;

  return <CounterView
    isLoading={value === MachineStates.LOADING}
    counter={count}
    changeAsync={async (module) => {
      send(MachineTransitions.LOAD_START);
      try {
        const delta = await fetchDeltaNumber(module);
        send({type: MachineTransitions.LOAD_SUCCESS, value: delta});
      } catch (err) {
        send(MachineTransitions.LOAD_FAILURE);
      }
    }}
    increment={() => send({type: MachineTransitions.CHANGE, value: 1})}
    decrement={() => send({type: MachineTransitions.CHANGE, value: -1})}
    changeBy={(delta) => send({type: MachineTransitions.CHANGE, value: delta})}
  />
}


export default memo(XstateCounter);
export { path, subPath } from './path';
