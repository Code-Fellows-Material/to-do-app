import React, {useEffect, useState} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const testUsers = {
  admin: {password:'password', name:'Administrator', role:'admin', capabilities:['create','read','update','delete']},
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update']},
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create']},
};

export const LoginContext = React.createContext();

const LoginProvider = (props) => {



  const login = (username, password) => {
    if (testUsers[username]) {
      
      // Create a "good" token, like you'd get from a server
      const token = jwt.sign(testUsers[username], process.env.REACT_APP_SECRET);
      validateToken(token);
    }
  }

  const logout = () => {
    setLoginState(false, null, {});
  };
  
  let initialState = {
    loggedIn: false,
    login: login,
    logout: logout,
    user: {capabilities:[]},
  };

  let [state, setState] = useState(initialState);

  

  const validateToken = token => {
    try {
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      setLoginState(true, token, user);
    }
    catch (e) {
      setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }
    
  };
  
  const setLoginState = (loggedIn, token, user) => {
    console.log("Loggined", loggedIn)
    cookie.save('auth', token);
    setState({ ...state, token, loggedIn, user});
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token);
  }, [])
  
  

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );

}

export default LoginProvider;
