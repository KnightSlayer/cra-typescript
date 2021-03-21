import React, { memo, FC, ComponentClass } from "react";
import { Route, NavLink, useRouteMatch } from "react-router-dom";
import cn from 'classnames';

import styles from './Menu.module.scss';

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
      <nav className={cn(styles.nav, className)}>
        { routes.map(({ subPath, label}) => (
          <NavLink
            key={subPath}
            to={url + subPath}
            className={styles.link}
            activeClassName={styles.active}
          >
            { label }
          </NavLink>
        ))}
      </nav>
      { routes.map(({Component, subPath}) => (
        <Route key={subPath} path={path + subPath}>
          <Component />
        </Route>
      ))}
    </>
  )
}

export default memo(Menu)
