import React,{useEffect} from "react";
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import {auth} from './firebase';
import {useStateValue} from './StateProvider';
import Payment from "./Components/Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Components/Orders';

const promise = loadStripe( 'pk_test_51HpHNwIOJ0EHJ0ivNTWrbTcMAcUqonA48IpSgcGN3QKmdw0pmXx6tjOESoLysXpJuNhPQltZmo0xMaOJM14u9YAS00rPprekIl'
);

function App() {
  const[{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>',authUser);
      if (authUser) {
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders/>
            </Route>
          <Route path='/login'>
            <Login/>
            </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path ='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
