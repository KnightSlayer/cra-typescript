import React, { memo } from "react";
import Menu from "components/common/Menu";
import ReduxToolKit from "./ReduxToolKit";

const routes = [{
  Component: ReduxToolKit,
  subPath: 'redux-toolkit-saga-and-thunk',
  label: 'ReduxToolKit',
}]


const Counters = () => (
  <div>
    <h1> Counter components made from different State Management tools</h1>

    <Menu routes={routes}/>
  </div>
)

export default memo(Counters)
export { default as path } from './path';
