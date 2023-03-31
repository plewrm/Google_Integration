import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const { loginWithRedirect } = useAuth0();


  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {/* {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )} */}

        {props.isLoggedIn ?(
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        ):(
          <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
