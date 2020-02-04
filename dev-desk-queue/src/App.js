import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StudentDashboard from './components/Student/StudentDashboard.js';
import HelperDashboard from './components/Helper/HelperDashboard.js';
import CreateTicket from './components/CreateTicket/CreateTicket.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/student' component={StudentDashboard} />
        <Route exact path='/ticket' component={CreateTicket} />
        <Route exact path='/helper' component={HelperDashboard} /> 
=======
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
>>>>>>> 96a1d84d49b3047098fd3164fdd9cecb2baa18a9
      </div>
    </Router>
  );
}

export default App;
