import { memo } from "react";

type TChangeAsync = (module: number) => void

type TCounterViewProps = {
  counter: number
  increment: () => void
  decrement: () => void
  changeBy: (delta: number) => void
  changeAsync: TChangeAsync | {
    func: TChangeAsync
    label: string
  }[]
  isLoading: boolean
}

const MODULE_OF_RANDOM = 20;
const DELTA = 10;

const CounterView = ({ counter, increment, decrement, changeBy, changeAsync, isLoading}: TCounterViewProps) => (
  <div>
    Counter: { counter }

    <br/>

    <button onClick={increment}> +1 </button>
    <button onClick={decrement}> -1 </button>
    <button onClick={() => changeBy(DELTA)}> +{DELTA} </button>
    {Array.isArray(changeAsync) && changeAsync.map(({func, label}) => (
      <button
        key={label}
        onClick={() => func(MODULE_OF_RANDOM)}
        disabled={isLoading}
      >
        { label }
      </button>
    ))}
    {!Array.isArray(changeAsync) && (
      <button
        onClick={() => changeAsync(MODULE_OF_RANDOM)}
        disabled={isLoading}
      >
        random async
      </button>
    )}
  </div>
)

export default memo(CounterView);
