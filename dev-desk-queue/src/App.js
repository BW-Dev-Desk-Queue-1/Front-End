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
        {/* <Register /> */}
      <Switch> 
        <PrivateRoute exact path='/tickets/new' component={CreateTicket}/>
        <PrivateRoute exact path="/dashboard" component={HelperDashboard} />
        
        <Route path="/" component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
