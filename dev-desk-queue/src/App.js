import React from 'react';
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
      </div>
    </Router>
  );
}

export default App;
