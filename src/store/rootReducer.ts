import { combineReducers } from '@reduxjs/toolkit'
import counter from "./reducers/counter/counter";

const rootReducer = combineReducers({
  counter,
})

export type TRootState = ReturnType<typeof rootReducer>

export default rootReducer
