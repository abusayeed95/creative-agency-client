import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderForm from './components/ManageOrder/OrderForm/OrderForm';
import PostReview from './components/PostReview/PostReview';

export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({})


  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <div className="app">

      <Router>
        <Switch>

            <Route path="/home" >
              <Home></Home>
            </Route>

            <Route path="/login" >
              <Login></Login>
            </Route>

            <Route path="/orderForm" >
              <OrderForm></OrderForm>
            </Route>

            <Route path="/postReview" >
              <PostReview></PostReview>
            </Route>

            <PrivateRoute path="/dashboard" >
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route exact path="/" >
              <Home></Home>
            </Route>

      </Switch>
    </Router>

    </div>

    </UserContext.Provider>
  );
};

export default App;