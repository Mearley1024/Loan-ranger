import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";
import LoanType2 from "../loanType/LoanType2.component";
import LoanType1 from "../loanType/LoanType1.component";

const NavBar = () => {
  const result = useAuth0();
  console.log('navbar.result', result);
  const { isAuthenticated, loginWithRedirect, logout } = result;

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
            <span>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/profile">Profile</Link>
            </span>
          )}
        );
      };
     </div> 
  );
};
// buttons for logging in and out 
export default NavBar;