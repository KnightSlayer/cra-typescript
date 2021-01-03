import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home, { path as homePath } from './routes/Home/Home'
import ArticlesRoutes, { path as articlesPath } from './routes/Articles'


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
        </ul>
      </nav>
      <Switch>
        <Route path={homePath} exact>
          <Home/>
        </Route>

        <Route path={articlesPath}>
          <ArticlesRoutes/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
