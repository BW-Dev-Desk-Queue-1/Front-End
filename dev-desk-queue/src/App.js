import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage.js';

import Dashboard from './components/Dashboard'
import CreateTicket from './components/CreateTicket/CreateTicket.js';
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  
  
  return (
    <Router>    
      <div className="App">

      <Switch> 
        <PrivateRoute exact path='/tickets/new' component={CreateTicket} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} /> 
        <Route exact path="/" component={LoginPage} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
