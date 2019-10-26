import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import IwashNavBar from './js/components/Navbar/Navbar';
import NotFound from './js/components/NotFound/NotFound';

const Home = lazy(() => import('./js/views/Home/Home'));
const Login = lazy(() => import('./js/views/Login/Login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <IwashNavBar/>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route render={() => <NotFound/>} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
