import React, {useEffect} from 'react'
import './app.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout';
import {useStateValue} from "./components/StateProvider"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import { auth } from './firebase';


function App() {

       const [{}, dispatch] = useStateValue();


  //will only run once when the app component loads
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)

      if(authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])

  return (    
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
