import React, { Suspense, lazy, useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { UserContext } from './UserContext';

import IwashNavBar from './js/components/Navbar/Navbar';
import Footer from './js/components/Footer/Footer';
import NotFound from './js/components/NotFound/NotFound';


const Home = lazy(() => import('./js/views/Home/Home'));
const LoggedHome = lazy(() => import('./js/views/LoggedHome/LoggedHome'));
const Login = lazy(() => import('./js/views/Login/Login'));
const Register = lazy(() => import('./js/views/Register/Register'));
const Washers = lazy(() => import('./js/views/Washers/Washers'));
const Wallet = lazy(() => import('./js/views/Wallet/Wallet'));
const Checkout = lazy(() => import('./js/views/Checkout/Checkout'));
const CurrentWash = lazy(() => import('./js/views/CurrentWash/CurrentWash'));
const Map = lazy(() => import('./js/views/Map/Map'));
const Presentation = lazy(() => import('./js/presentation/presentation'));

const Rasp = lazy(() => import('./js/views/Rasp/Rasp'));

function App() {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [backen_url] = useState('http://iwash-backend.herokuapp.com');

  const [washersData, setWashersData] = useState();
  const [dryersData, setDryersData] = useState();
  const [valuesData, setValuesData] = useState();
  const [currentWashing, setCurrentWashing] = useState();
  
  const [user, setUser] = useState(null);
  const [Auth, setAuth] = useState(null);
  let tokenAuth = localStorage.getItem('token');
  let userId = localStorage.getItem('userID');
  let userEmail = localStorage.getItem('email');

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  },[windowHeight])

  useEffect(() => {
    fetch(backen_url+'/washers')
      .then(res => res.json())
      .then(res => setWashersData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'/dryers')
      .then(res => res.json())
      .then(res => setDryersData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'/values')
      .then(res => res.json())
      .then(res => setValuesData(res))
      .catch(error => console.log('error: ', error) );
  },[backen_url])

  useEffect(() => {
    fetch(backen_url+'/user_wash', {
      method: 'POST',
      cors: '*cors',
      body: JSON.stringify({
        user_id: userId,
        user_email: userEmail
      }),
      headers:{
          'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => setCurrentWashing(res))
      .catch(error => console.log('error: ', error) );
  },[userId, userEmail, currentWashing, backen_url])


  const providerValue = useMemo(() => ({ user, setUser, Auth, setAuth, washersData, dryersData, valuesData, setValuesData, currentWashing, backen_url, windowHeight }), [user, setUser, Auth, setAuth, washersData, dryersData, valuesData, setValuesData, currentWashing, backen_url, windowHeight]);

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Suspense fallback={<div>Loading...</div>}>
          <IwashNavBar/>
            <Switch>
              {!tokenAuth ? <Route exact path="/" component={Home} /> : <Route exact path="/" component={LoggedHome}/> }
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/washers/:WID" component={Washers} />
              <Route path="/wallet" component={Wallet} />
              <Route path="/checkout/:amount" component={Checkout} />
              <Route path="/current-wash" component={CurrentWash} />
              <Route path="/map" component={Map} />
              <Route path="/presentation" component={Presentation} />
              <Route path="/rasp" component={Rasp} />
              <Route render={() => <NotFound/>} />
            </Switch>
          <Footer/>
        </Suspense>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
