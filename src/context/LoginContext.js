import React, {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies()

export const LoginContext = React.createContext();

const LoginProvider = (props) => {

  const login = (userdata) => {
    setLoginState(true, userdata.token, userdata.user);
  }

  const logout = () => {
    cookies.set('auth', {}, { path: '/' });
    setLoginState(false, '', {});
  };
  
  let initialState = {
    loggedIn: false,
    login: login,
    logout: logout,
    user: {capabilities:[]},
  };

  let [state, setState] = useState(initialState);

  //Cookies need re added

  const validateToken = async (token) => {
    if(Object.keys(token).length === 0) return;

    try {
      const response = await fetch('http://localhost:3001/verify', {
      method: 'post',
      body: JSON.stringify({token}),
      headers: { 'Content-Type': 'application/json' },
    });
      let parsedRes = await response.json();
      console.log(parsedRes)
      setLoginState(true, parsedRes.token, parsedRes);
    }
    catch (e) {
      setLoginState(false, '', {});
      console.log('Token Validation Error', e);
    }

  };
  
  const setLoginState = (loggedIn, token, user) => {
    cookies.set('auth', token, { path: '/' });
    setState({ ...state, token, loggedIn, user});
  };

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookies.get('auth');
    const token = cookieToken || '';
    validateToken(token);
  }, [])
  
  

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );

}

export default LoginProvider;
