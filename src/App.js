import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Authentication/Login/Login";
import Orders from './Components/Orders/Orders';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// 1-05-40 
//1. Upgrade the header component to include the user's email
//2. Add animation to the build
//3. Style Amazon

const stripePromise = loadStripe("pk_test_51IPbKHLGi8vxXfkLOAPosAJ7j4HUk6dmKfIqlgMAr3AvetVs30fUOpnpd8tO2ET9FVtjlMYWPmmvAViQ8HYrnftP00GeZgjBqQ");
console.log(stripePromise);
function App() {
   const [{}, dispatch] = useStateValue();

   useEffect(()=> {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser)=> {
      console.log('THE USER IS >>>>',authUser);
       
      if (authUser) {
            // User is signed in.
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
        } else {
            // User is signed out.
            dispatch({
              type: 'SET_USER',
              user: null
            })
        }
    });
  }, [])
  
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
            <Payment /> 
           </Elements>
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
