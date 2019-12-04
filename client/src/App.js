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
import NavBar from './components/Header/LoginNav';
import { useAuth0 } from "./react-auth0-spa";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const result = useAuth0();
  console.log('result', result);
  const { loading } = result;

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
    <Router history={history}>
    <Header />
    <NavBar/> 
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Terms/:id" component={Terms} />
        <Route exact path="/LoanType/:id" component={LoanType} />
        {/* <Route exact path="/Qualifications/:id" component={Qualifications} /> */}
        <Route exact path="/Results/:id" component={Results} />
      </Switch>
    </Router>
    </div>

  );
};

export default App;
