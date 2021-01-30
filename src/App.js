import React, {useEffect} from 'react'
import './app.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout';
import {useStateValue} from "./components/StateProvider"
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import { auth } from './firebase';
import Payment from './components/payment/Payment';
import Orders from './components/orders/Orders';

const promise = loadStripe(
  "pk_test_51IDXp3LfME8Q3ekweweyb14hh91QC5XWo9x1PfkLPaalBTqtcTU47aM50IE2mxA0gxYq5nypaVL5AatZXhcrQa5300FFLu0tO9"
)


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
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
                 <Payment/>  
            </Elements>                     
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
