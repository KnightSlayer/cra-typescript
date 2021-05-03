import { memo } from "react";
import Menu from "components/common/Menu";
import ReduxToolKitCounter, { subPath as reduxSubPath } from "./ReduxToolKit";
import ZustandCounter , { subPath as zustandSubPath } from "./Zustand";
import XstateCounter , { subPath as xstateSubPath } from "./Xstate";
import ValtioCounter , { subPath as valtioSubPath } from "./Valtio";

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
  {
    Component: ValtioCounter,
    subPath: valtioSubPath,
    label: 'Valtio',
  },
];


const Counters = () => (
  <div>
    <h1> Counter components made with different State Management tools</h1>

    <Menu routes={routes}/>
  </div>
);

export default memo(Counters);
export { default as path } from './path';
