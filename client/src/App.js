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
<<<<<<< HEAD
import Header from './components/Header/navbar.component.js';
import NavBar from "./components/Header/LoginNav";
import { useAuth0 } from "./react-auth0-spa";



function App() {
  console.log('====loading=========')
  console.log(useAuth0)
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
=======
import Header from './components/Header/navbar.component';
import Results from './pages/Results/Results.component';
>>>>>>> 59e525deaf102e8b6ed945d51b6e4396bf077dcf

  return (
<<<<<<< HEAD
    <Router >
      <NavBar />
    <Header/> 
=======
    <Router>
    <Header /> 
>>>>>>> 59e525deaf102e8b6ed945d51b6e4396bf077dcf
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