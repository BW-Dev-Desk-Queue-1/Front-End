import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StudentDashboard from './components/Student/StudentDashboard.js';
import HelperDashboard from './components/Helper/HelperDashboard.js';

function App() {
  return (
    <div className="App">
       <Route path='/student' component={StudentDashboard} />
       <Route Path='/helper' component={HelperDashboard} /> 
    </div>
  );
}

export default App;
