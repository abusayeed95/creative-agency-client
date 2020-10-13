import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';

const App = () => {
  return (
    <div className="app">
      <Router>
      <Switch>

        <Route path="/home" >
          <Home></Home>
        </Route>




        <Route exact path="/" >
          <Home></Home>
        </Route>

      </Switch>
    </Router>
    </div>
  );
};

export default App;