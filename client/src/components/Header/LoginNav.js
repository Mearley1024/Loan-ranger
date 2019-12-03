import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const NavBar = () => {
  const result = useAuth0();
  console.log('navbar.result', result);
  const { isAuthenticated, loginWithRedirect, logout } = result;

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};
// buttons fr loging in and out 
export default NavBar;



