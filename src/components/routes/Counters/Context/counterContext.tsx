import { createContext, useState, useCallback, ReactNode } from "react";
import { fetchDeltaNumber } from "store/reducers/counter/api";
import { TCounterViewProps } from "../CounterView";

const noop = () => {};
const CounterContext = createContext<TCounterViewProps>({
  counter: 0,
  isLoading: false,
  increment: noop,
  decrement: noop,
  changeBy: noop,
  changeAsync: noop,
});

export const CounterContextProvider = ({ children }: {children: ReactNode}) => {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const increment = useCallback(() => setCounter(c => c + 1), []);
  const decrement = useCallback(() => setCounter(c => c - 1), []);
  const changeBy = useCallback((delta) => setCounter(c => c + delta), []);
  const changeAsync = useCallback(async (module: number) => {
    setIsLoading(true);
    const delta = await fetchDeltaNumber(module);
    setIsLoading(false);
    setCounter(c => c + delta);
    return delta;
  }, []);

  return (
    <CounterContext.Provider value={{
      counter, isLoading,
      increment, decrement, changeBy, changeAsync
    }}>
      { children }
    </CounterContext.Provider>
  )
}

export default CounterContext;
