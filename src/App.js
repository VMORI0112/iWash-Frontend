import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserContext } from './UserContext';

import IwashNavBar from './js/components/Navbar/Navbar';
import NotFound from './js/components/NotFound/NotFound';

const Home = lazy(() => import('./js/views/Home/Home'));
const LoggedHome = lazy(() => import('./js/views/LoggedHome/LoggedHome'));
const Login = lazy(() => import('./js/views/Login/Login'));
const Register = lazy(() => import('./js/views/Register/Register'));

function App() {

  const [user, setUser] = useState(null);
  const [Auth, setAuth] = useState(null);

  let tokenAuth = localStorage.getItem('token');


  const providerValue = useMemo(() => ({ user, setUser, Auth, setAuth }), [user, setUser, Auth, setAuth]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
        <IwashNavBar/>
          <Switch>
            {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route render={() => <NotFound/>} />
          </Switch>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
