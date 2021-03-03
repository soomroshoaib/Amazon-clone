import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Authentication/Login/Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
// 1-05-40

//1. Upgrade the header component to include the user's email
//2. Add animation to the build
//3. Style Amazon


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
          <Route path="/login">
            <Login />
          </Route>
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
