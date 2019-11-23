import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoanType from "./pages/LoanType";
import Terms from "./pages/Terms";
import Qualifications from "./pages/Qualifications";
import Results from "./pages/Results";
import logo from './logo.svg';
import './App.css';
import { Alert } from 'reactstrap';

// function App() {
//   return (
//     <div className="App">
//       <Alert color="primary">
//         LOAN RANGER — check it out!
//       </Alert>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="" component={LoanType} />
              <Route path="" component={Terms} />
              <Route path="" component={Qualifications} />
              <Route path="" component={Results} />
              <Route component={null} />
            </Switch>
          </Container>
        </Router>
      </div>
    )
  }
}

export default App;
