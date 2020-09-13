import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./Firebase";


function App() {
  const [{ basket }, dispatch] = useStateValue();
  //useEffect very powerful
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user login
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        //user logout
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    return () => {
      //cleanup operation
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
      <div className="footer">
        <h3>&copy; copyright 2020 AMAZON-CLONE</h3>
      </div>
    </Router>
  );
}

export default App;
