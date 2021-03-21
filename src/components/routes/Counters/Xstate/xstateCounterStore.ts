import { createMachine, assign, AnyEventObject } from "xstate";

type TCounterContext = {
  count: number
}

export enum MachineStates {
  IDLE = "IDLE",
  LOADING = "LOADING",
  ERROR = 'ERROR',
}
export enum MachineTransitions {
  CHANGE = 'CHANGE',
  LOAD_START = 'LOAD_START',
  LOAD_SUCCESS = 'LOAD_SUCCESS',
  LOAD_FAILURE = 'LOAD_FAILURE',
}

enum MachineActions {
  CHANGE_BY = 'CHANGE_BY',
}

const counterMachine = createMachine<TCounterContext>(
  {
    id: "counter",
    initial: MachineStates.IDLE,
    context: {
      count: 0
    },
    states: {
      [MachineStates.IDLE]: {
        on: {
          [MachineTransitions.CHANGE]: {actions: [MachineActions.CHANGE_BY]},
          [MachineTransitions.LOAD_START]: MachineStates.LOADING,
        }
      },
      [MachineStates.LOADING]: {
        on: {
          [MachineTransitions.CHANGE]: {actions: [MachineActions.CHANGE_BY]},
          [MachineTransitions.LOAD_SUCCESS]: {
            actions: [MachineActions.CHANGE_BY],
            target: MachineStates.IDLE,
          },
          [MachineTransitions.LOAD_FAILURE]: MachineStates.ERROR,
        },
      },
      [MachineStates.ERROR]: {

      },
    },
  },
  {
    actions: {
      [MachineActions.CHANGE_BY]: assign({
        count: (context, event) => context.count + event.value,
      }),
    },
  },
);

export default counterMachine;
