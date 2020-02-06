import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import StudentDashboard from './components/Student/StudentDashboard.js';
import LoginPage from './components/LoginPage/LoginPage.js';

import CreateTicket from './components/CreateTicket/CreateTicket.js';
import Login from "./components/Login";
import Register from './components/Register';

import HelperRegister from "./components/HelperRegister";
import HelperLogin from "./components/HelperLogin"
import HelperDashboard from './components/Helper/HelperDashboard.js';

import PrivateRoute from "./utils/PrivateRoute";


function App() {
  
  
  return (
    <Router>    
      <div className="App">

      <Switch> 
        <Route exact path='/' component={LoginPage} />
        {/* <Route path='/student' component={StudentDashboard} /> */}
        {/* <Route path='/helper' component={HelperDashboard} /> */}
        {/* <PrivateRoute exact path='/tickets/new' component={CreateTicket} /> */}
        {/* <PrivateRoute exact path="/dashboard" component={HelperDashboard} /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
