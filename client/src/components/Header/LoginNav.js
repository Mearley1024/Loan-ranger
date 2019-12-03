import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

console.log(useAuth0)
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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



