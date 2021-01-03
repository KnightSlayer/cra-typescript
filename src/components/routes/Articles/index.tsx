import React from 'react';
import { Switch, Route } from "react-router-dom";
import ArticlesList, { path as listPath } from "./List/ArticlesList";
import ArticlesById, { path as byIdPath } from "./ById/ArticlesById";


const Routes = () => (
  <Switch>
    <Route exact path={listPath}>
      <ArticlesList/>
    </Route>

    <Route exact path={byIdPath}>
      <ArticlesById/>
    </Route>
  </Switch>
)

export default Routes
export { default as path } from './path';
