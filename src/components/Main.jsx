import React from 'react';
import { When } from 'react-if';

import Nav from './Nav/Nav';
import ToDo from './todo/todo';

import Auth from './Auth/auth.js';
import Login from './Login/login.js';
import LoginContext from '../context/LoginContext.js';

const Main = () => {
  return (
    <LoginContext>
     
        <Login />

        <Auth capability='read'>
        <Nav />
        <ToDo />
      </Auth>


      {/* <Auth capability='create'>
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
      </Auth> */}
    </LoginContext>
  );
};

export default Main;
