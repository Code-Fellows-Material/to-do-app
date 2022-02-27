import React from 'react';
import Nav from './Nav/Nav';
import ToDo from './todo/todo';

import Auth from './Auth/auth.js';
import Login from './Login/login.js';
import LoginContext from '../context/LoginContext.js';

const Main = () => {
  return (
    <LoginContext>
      
      <Auth>
        <Login />
      </Auth>

      <Auth capability='create'>
        <Nav />
        <ToDo />
      </Auth>

      <Auth capability='update'>
        <Nav />
        <ToDo />
      </Auth>

      <Auth capability='delete'>
        <Nav />
        <ToDo />
      </Auth>
    </LoginContext>
  );
};

export default Main;
