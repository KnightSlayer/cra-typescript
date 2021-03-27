import { createMachine, assign, AnyEventObject } from "xstate";

type TCounterContext = {
  count: number
}

export enum MachineStates {
  IDLE = "IDLE",
  LOADING = "LOADING",
  ERROR = 'ERROR',
}
export enum MachineEvents {
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
          [MachineEvents.CHANGE]: {actions: [MachineActions.CHANGE_BY]},
          [MachineEvents.LOAD_START]: MachineStates.LOADING,
        }
      },
      [MachineStates.LOADING]: {
        on: {
          [MachineEvents.CHANGE]: {actions: [MachineActions.CHANGE_BY]},
          [MachineEvents.LOAD_SUCCESS]: {
            actions: [MachineActions.CHANGE_BY],
            target: MachineStates.IDLE,
          },
          [MachineEvents.LOAD_FAILURE]: MachineStates.ERROR,
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
