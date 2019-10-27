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
const Machine = lazy(() => import('./js/views/Machine/Machine'));

function App() {

  let washingMachines = [
    { 
      id: "1",
      type: "Washer",
      name: "washing machine number 1",
      cicle1: "fast",
      cicle2: "normal",
      cicle3: "Hot",
      cicle4: "cold",
      price1: 1.25,
      price2: 2.00,
      price3: 2.25,
      price4: 2.15 
  },
  {
    id: "2",
      type: "Washer",
      name: "washing machine number 2",
      cicle1: "fast",
      cicle2: "normal",
      cicle3: "Hot",
      cicle4: "cold",
      price1: 1.25,
      price2: 2.00,
      price3: 2.25,
      price4: 2.15 
  },
  {
    id: "3",
      type: "Washer",
      name: "washing machine number 3",
      cicle1: "fast",
      cicle2: "normal",
      cicle3: "Hot",
      cicle4: "cold",
      price1: 1.25,
      price2: 2.00,
      price3: 2.25,
      price4: 2.15 
  },
  {
    id: "4",
      type: "Washer",
      name: "washing machine number 4",
      cicle1: "fast",
      cicle2: "normal",
      cicle3: "Hot",
      cicle4: "cold",
      price1: 1.25,
      price2: 2.00,
      price3: 2.25,
      price4: 2.15 
  },
  {
    id: "5",
      type: "Washer",
      name: "washing machine number 5",
      cicle1: "fast",
      cicle2: "normal",
      cicle3: "Hot",
      cicle4: "cold",
      price1: 1.25,
      price2: 2.00,
      price3: 2.25,
      price4: 2.15 
  },
  {
    id: "6",
      type: "Washer",
      name: "washing machine number 6",
      cicle1: "fast",
      cicle2: "normal",
      cicle3: "Hot",
      cicle4: "cold",
      price1: 1.25,
      price2: 2.00,
      price3: 2.25,
      price4: 2.15 
  },
  {
    id: "7",
      type: "Dryer",
      name: "Dryer machine number 1",
      time: "6",
      cicle: "normal",
      price: 0.30
  },
  {
    id: "8",
      type: "Dryer",
      name: "Dryer machine number 2",
      time: "6",
      cicle: "normal",
      price: 0.30
  }
];
  const [user, setUser] = useState(null);
  const [Auth, setAuth] = useState(null);
  let tokenAuth = localStorage.getItem('token');


  const providerValue = useMemo(() => ({ user, setUser, Auth, setAuth, washingMachines }), [user, setUser, Auth, setAuth, washingMachines]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
        <IwashNavBar/>
          <Switch>
            {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/machine/:id" component={Machine} />
            <Route render={() => <NotFound/>} />
          </Switch>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
