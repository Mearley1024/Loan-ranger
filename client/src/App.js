import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Terms } from './pages/Terms/Terms.js';
import { Link } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Terms" component={Terms} />
       </Switch>
    </Router>

  );
}

export default App;