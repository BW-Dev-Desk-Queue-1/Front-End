import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StudentDashboard from './components/Student/StudentDashboard.js';

function App() {
  return (
    <div className="App">
       <Route exact path='/' component={StudentDashboard} /> 
    </div>
  );
}

export default App;
