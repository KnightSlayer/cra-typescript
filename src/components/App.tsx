import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home, { path as homePath } from './routes/Home/Home'
import ArticlesRoutes, { path as articlesPath } from './routes/Articles'
import Counter, { path as counterPath } from './routes/Counter/Counter'
import NotFound from './routes/NotFound/NotFound'


function App() {
  return (
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
  );
}

export default App;
