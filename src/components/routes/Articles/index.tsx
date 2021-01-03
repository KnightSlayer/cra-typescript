import React from 'react';
import { Switch, Route } from "react-router-dom";
import ArticlesList, { path as listPath } from "./List/ArticlesList";
import ArticlesById, { path as byIdPath } from "./ById/ArticlesById";
import NotFound from "../NotFound/NotFound";


const Routes = () => (
  <Switch>
    <Route exact path={listPath}>
      <ArticlesList/>
    </Route>

    <Route exact path={byIdPath}>
      <ArticlesById/>
    </Route>

    <Route>
      <NotFound/>
    </Route>
  </Switch>
)

export default Routes
export { default as path } from './path';
