import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard'

import CreateTicket from './components/CreateTicket/CreateTicket.js';
import Login from "./components/Login";
import Register from './components/Register';
import StudentDashboard from './components/Student/StudentDashboard.js';

import HelperRegister from "./components/HelperRegister";
import HelperLogin from "./components/HelperLogin"
import HelperDashboard from './components/Helper/HelperDashboard.js';

import PrivateRoute from "./utils/PrivateRoute";


function App() {
  
  
  return (
    <Router>    
      <div className="App">
        <Register />
        <HelperRegister />
      <Switch> 
        <PrivateRoute exact path='/tickets/new' component={CreateTicket} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/h" component={HelperLogin} />        
        <Route exact path="/" component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
