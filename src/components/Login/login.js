import React, { useState, useContext} from 'react';
import {When} from 'react-if';

import { LoginContext } from '../../context/LoginContext';

let initialState = { username: '', password: '' };


const Login = () => {
  
  const login = useContext(LoginContext)

  
  const [loginState, setLoginState] = useState(initialState);


  const handlePasswordChange = e => {
    setLoginState(prev => ({...prev, password: e.target.value }));
  };
  const handleUserChange = e => {
    setLoginState(prev => ({...prev, username: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginState)

    login.login(loginState.username, loginState.password);
  };

    return (
      <>
        <When condition={login.loggedIn}>
          <button onClick={login.logout}>Log Out</button>
        </When>

        <When condition={!login.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={handleUserChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={handlePasswordChange}
            />
            <button>Login</button>
          </form>
        </When>
      </>
    );
}

export default Login;
