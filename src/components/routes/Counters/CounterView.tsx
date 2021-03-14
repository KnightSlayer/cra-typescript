import { memo } from "react";

type TAsyncAction = {
  func: (module: number) => void
  label?: string
}

type TCounterViewProps = {
  counter: number
  increment: () => void
  decrement: () => void
  changeBy: (delta: number) => void
  changeAsync: TAsyncAction | TAsyncAction[]
}

const MODULE_OF_RANDOM = 20;
const DELTA = 10;

const CounterView = ({ counter, increment, decrement, changeBy, changeAsync}: TCounterViewProps) => (
  <div>
    Counter: { counter }

    <br/>

    <button onClick={increment}> +1 </button>
    <button onClick={decrement}> -1 </button>
    <button onClick={() => changeBy(DELTA)}> +{DELTA} </button>
    {Array.isArray(changeAsync) && changeAsync.map(({func, label}) => (
      <button key={label} onClick={() => func(MODULE_OF_RANDOM)}> { label } </button>
    ))}
    {!Array.isArray(changeAsync) && (
      <button onClick={() => changeAsync.func(MODULE_OF_RANDOM)}> { changeAsync.label || 'random async'} </button>
    )}
  </div>
)

export default memo(CounterView);
