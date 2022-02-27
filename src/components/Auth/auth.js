import React, { useContext } from 'react';
import {When} from 'react-if';

import { LoginContext } from '../../context/LoginContext';

const Auth = (props) => {

  const login = useContext(LoginContext)

  const can = (capability) => {
    return login?.user?.capabilities?.includes(capability);
  }
  
  console.log("AUTH - Login Context", login);
    const isLoggedIn = login.loggedIn;
    const canDo = login ? can(props.capability) : true;
    const okToRender = isLoggedIn && canDo;
    console.log(isLoggedIn, canDo)

    return (
      <When condition={okToRender}>
        {props.children}
      </When>
    );
}

export default Auth;
