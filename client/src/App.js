import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Weather from './components/weather.js'

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact router="/" component={Weather}/>
      </Switch>
    </Router>
  );
}

export default App;
