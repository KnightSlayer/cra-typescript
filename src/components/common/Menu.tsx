import React, { memo, FC, ComponentClass } from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";

type TMenuProps = {
  routes: {
    Component: FC | ComponentClass;
    subPath: string;
    label: string;
  }[];
  className?: string;
}

const Menu = ({ routes, className }: TMenuProps) => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <nav className={className}>
        { routes.map(({ subPath, label}) => (
          <NavLink key={subPath} to={url + '/' + subPath}> { label } </NavLink>
        ))}
      </nav>
      { routes.map(({Component, subPath}) => (
        <Route key={subPath} path={path + '/' + subPath}>
          <Component />
        </Route>
      ))}
    </>
  )
}

export default memo(Menu)
