import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Home from './components/Home';
import NavTab from './components/NavTab';
import Dashboard from './components/Dashboard';

function App() {
  
  function get(url){
    axios.get(url)
    .then(res =>{
      console.log(res);
    })
    .catch(err =>{
      console.log(err);
    })
  }
  return (
    <div className="App">
      <NavTab />
      <Route exact path='/' component={Home}/>
      <Route path="/home" component={Home} />
      <Route path="/dashboard" component={Dashboard} />

    </div>
  );
}

export default App;
