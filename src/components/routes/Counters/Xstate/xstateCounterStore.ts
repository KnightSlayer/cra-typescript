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
          [MachineTransitions.CHANGE]: {actions: ['changeBy']},
          [MachineTransitions.LOAD_START]: MachineStates.LOADING,
        }
      },
      [MachineStates.LOADING]: {
        on: {
          [MachineTransitions.CHANGE]: {actions: ['changeBy']},
          [MachineTransitions.LOAD_SUCCESS]: {
            actions: ['changeBy'],
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
      changeBy: assign({
        count: (context, event) => context.count + event.value,
      }),
    },
  },
);

export default counterMachine;
