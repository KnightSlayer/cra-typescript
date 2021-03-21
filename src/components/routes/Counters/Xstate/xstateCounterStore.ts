import { createMachine, assign, AnyEventObject } from "xstate";

type TCounterContext = {
  count: number
}

export enum MachineStates {
  IDLE = "IDLE",
  LOADING = "LOADING",
  ERROR = 'ERROR',
}
export enum MachineActions {
  CHANGE = 'CHANGE',
  LOAD_START = 'LOAD_START',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
  LOAD_FAILURE = 'LOAD_FAILURE',
}

const changeAction = assign({
  count: (context: TCounterContext, event: AnyEventObject) => {
    return context.count + event.value;
  }
});

const counterMachine = createMachine<TCounterContext>({
  id: "counter",
  initial: MachineStates.IDLE,
  context: {
    count: 0
  },
  states: {
    [MachineStates.IDLE]: {
      on: {
        [MachineActions.CHANGE]: {actions: [changeAction]},
        [MachineActions.LOAD_START]: MachineStates.LOADING,
      }
    },
    [MachineStates.LOADING]: {
      on: {
        [MachineActions.CHANGE]: {actions: [changeAction]},
        [MachineActions.LOAD_SUCCESS]: {
          actions: [changeAction],
          target: MachineStates.IDLE,
        },
        [MachineActions.LOAD_FAILURE]: MachineStates.ERROR,
      },
    },
    [MachineStates.ERROR]: {

    },
  }
});

export default counterMachine;
