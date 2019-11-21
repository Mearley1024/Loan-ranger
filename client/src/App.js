import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Homes  from './pages/Home/Home.component.js';
import  Terms  from './pages/Terms/Terms.component.js';
import  Qualifications  from './pages/Qualifications/Qualifications.component.js';
// import { Link } from 'react-router-dom'
import  LoanType  from './pages/LoanType/LoanType.component.js';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Header from './components/Header/navbar.component';





function App() {
  return (
    <Router>
    <Header/> 
      <Switch>
        <Route exact path="/Home" component={Homes} />
        <Route exact path="/Terms" component={Terms} />
        <Route exact path="/LoanType" component={LoanType} />
        <Route exact path="/Qualifications" component={Qualifications} />
      </Switch>
    </Router>

  );
}

export default App;