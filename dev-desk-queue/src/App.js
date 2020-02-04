import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import './App.css';

import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./utils/PrivateRoute";

import Register from './components/Register';

function App() {
  
  
  return (
    <Router>    
      <div className="App">
        <NavTab />
        <Register />
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path="/home" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
