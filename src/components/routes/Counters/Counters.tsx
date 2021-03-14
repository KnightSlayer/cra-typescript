import { memo } from "react";
import Menu from "components/common/Menu";
import ReduxToolKit, { subPath as reduxSubPath } from "./ReduxToolKit/ReduxToolKitCounter";

const routes = [{
  Component: ReduxToolKit,
  subPath: reduxSubPath,
  label: 'ReduxToolKit',
}];


const Counters = () => (
  <div>
    <h1> Counter components made from different State Management tools</h1>

    <Menu routes={routes}/>
  </div>
);

export default memo(Counters);
export { default as path } from './path';
