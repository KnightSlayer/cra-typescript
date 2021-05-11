import {memo, ReactNode} from "react";
import Menu from "components/common/Menu";
import { RecoilRoot } from "recoil";
import { CounterContextProvider } from "./Context/counterContext";
import ReduxToolKitCounter, { subPath as reduxSubPath } from "./ReduxToolKit";
import ZustandCounter, { subPath as zustandSubPath } from "./Zustand";
import XstateCounter, { subPath as xstateSubPath } from "./Xstate";
import ValtioCounter, { subPath as valtioSubPath } from "./Valtio";
import RecoilCounter, { subPath as recoilSubPath } from "./Recoil";
import JotaiCounter, { subPath as jotaiSubPath } from "./Jotai";
import MobxCounter, { subPath as mobxSubPath } from "./Mobx";
import ContextCounter, { subPath as contextSubPath } from "./Context"

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
  {
    Component: RecoilCounter,
    subPath: recoilSubPath,
    label: 'Recoil',
  },
  {
    Component: JotaiCounter,
    subPath: jotaiSubPath,
    label: 'Jotai',
  },
  {
    Component: MobxCounter,
    subPath: mobxSubPath,
    label: 'MobX',
  },
  {
    Component: ContextCounter,
    subPath: contextSubPath,
    label: 'Context',
  },
];

const HelperWrappers = ({children}: {children: ReactNode}) => (
  <RecoilRoot>
    <CounterContextProvider>
      {children}
    </CounterContextProvider>
  </RecoilRoot>
)


const Counters = () => (
  <HelperWrappers>
    <div>
      <h1> Counter components made with different State Management tools</h1>

      <Menu routes={routes}/>
    </div>
  </HelperWrappers>
);

export default memo(Counters);
export { default as path } from './path';
