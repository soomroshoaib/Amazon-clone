import React from 'react';
import Header from './Components/Header/Header'
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';

// 1-05-40

function App() {
  return (
    <Router>
    <div className="App">
 
     
     <Switch>
       <Route path="/checkout">
     <Header />
        <Checkout />
       </Route>

       <Route path="/">
     <Header />
     <Home />
       </Route>
    
     </Switch>
    </div>

    </Router>
      
  );
}

export default App;
