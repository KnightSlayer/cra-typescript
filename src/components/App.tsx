import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "store/store";
import Home, { path as homePath } from './routes/Home/Home'
import ArticlesRoutes, { path as articlesPath } from './routes/Articles'
import Counter, { path as counterPath } from './routes/Counter/Counter'
import NotFound from './routes/NotFound/NotFound'


function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={homePath}>Home</Link>
            </li>
            <li>
              <Link to={articlesPath}>Articles</Link>
            </li>
            <li>
              <Link to={counterPath}>Counter</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path={homePath} exact>
            <Home/>
          </Route>

          <Route path={articlesPath}>
            <ArticlesRoutes/>
          </Route>

          <Route path={counterPath} exact>
            <Counter/>
          </Route>

          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default React.memo(App);
