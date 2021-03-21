import { memo } from "react";
import Menu from "components/common/Menu";
import ReduxToolKitCounter, { subPath as reduxSubPath } from "./ReduxToolKit";
import ZustandCounter , { subPath as zustandSubPath } from "./Zustand";
import XstateCounter , { subPath as xstateSubPath } from "./Xstate";

const routes = [
  {
    Component: ReduxToolKitCounter,
    subPath: reduxSubPath,
    label: 'ReduxToolKit',
  },
  {
    Component: ZustandCounter,
    subPath: zustandSubPath,
    label: 'Zustand',
  },
  {
    Component: XstateCounter,
    subPath: xstateSubPath,
    label: 'XState',
  },
];


const Counters = () => (
  <div>
    <h1> Counter components made from different State Management tools</h1>

    <Menu routes={routes}/>
  </div>
);

export default memo(Counters);
export { default as path } from './path';
