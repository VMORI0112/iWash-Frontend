import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserContext } from './UserContext';

import IwashNavBar from './js/components/Navbar/Navbar';
import NotFound from './js/components/NotFound/NotFound';

const Home = lazy(() => import('./js/views/Home/Home'));
const Login = lazy(() => import('./js/views/Login/Login'));

function App() {
  const [user, setUser] = useState(null);


  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
        <IwashNavBar/>
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route render={() => <NotFound/>} />
          </Switch>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
