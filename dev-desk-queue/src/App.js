import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import StudentDashboard from './components/Student/StudentDashboard.js';
import HelperDashboard from './components/Helper/HelperDashboard.js';
import CreateTicket from './components/CreateTicket/CreateTicket.js';



import Login from "./components/Login"
import PrivateRoute from "./utils/PrivateRoute";

import Register from './components/Register';

function App() {
  
  
  return (
    <Router>    
      <div className="App">
        <Register />
      <Switch> 
        <Route exact path='/' component={Login}/>
        <Route path="/home" component={Login} />
        <Route path="/dashboard" component={StudentDashboard} component={HelperDashboard} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
