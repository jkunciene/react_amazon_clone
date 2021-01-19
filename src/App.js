import React from 'react'
import './app.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Checkout from './components/checkout/Checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (    
    <Router>
      <div>
        <Switch>
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
