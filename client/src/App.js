import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Home  from './pages/Home/Home.component.js';
import  Terms  from './pages/Terms/Terms.component.js';
import  Qualifications  from './pages/Qualifications/Qualifications.component.js';
// import { Link } from 'react-router-dom'
import  LoanType  from './pages/LoanType/LoanType.component.js';
import Header from './components/Header/navbar.component';
import Results from './pages/Results/Results.component';

function App() {
  return (
    <Router>
    <Header /> 
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Terms" component={Terms} />
        <Route exact path="/LoanType" component={LoanType} />
        <Route exact path="/Qualifications" component={Qualifications} />
        <Route exact path="/Results" component={Results} />


      </Switch>
    </Router>

  );
}

export default App;