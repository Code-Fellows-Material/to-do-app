import React, { useState, useContext } from 'react';
import Shaker  from './Shaker';
import { When } from 'react-if';
import { encode } from 'js-base64';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

import { LoginContext } from '../../context/LoginContext';

let initialState = { username: '', password: '', role: 'admin' };

const Login = () => {
  const login = useContext(LoginContext);

  const [loginState, setLoginState] = useState(initialState);
  const [signUpState, setSignUpState] = useState(false);
  const [signInState, setSignInState] = useState(true);
  const [wiggleState, setWiggleState] = useState(false);

  const handlePasswordChange = (e) => {
    setLoginState((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleUserChange = (e) => {
    setLoginState((prev) => ({ ...prev, username: e.target.value }));
  };

  const handleSignUpClick = () => {
    setSignUpState(!signUpState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data;
    if (signUpState) {
      console.log(loginState)
      const response = await fetch('http://localhost:3001/signup', {
        method: 'post',
        body: JSON.stringify(loginState),
        headers: { 'Content-Type': 'application/json' },
      });
      data = await response.json();
    } else {
      try {
        const response = await fetch('http://localhost:3001/signin', {
          method: 'post',
          headers: {
            authorization: encode(
              `${loginState.username}:${loginState.password}`
            ),
          },
        });
        data = await response.json();
      } catch (e) {
        // console.log("ERROR:", e)
        setWiggleState(true);
        setSignInState(false);
        return;
      }
    }
    console.log(data);
    login.login(data);
  };

  return (
    <>
      <When condition={!login.loggedIn}>
        <Box
          sx={{
            backgroundColor: '#1976D2',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
          }}
        >
          <Stack spacing={4}>
            <Card
              variant='outlined'
              sx={{
                backgroundColor: '#1976D2',
                border: '4px solid white',
                borderRadius: '14px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                  m: 2,
                }}
                variant='h1'
              >
                To Do...
              </Typography>
            </Card>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 0,
                  width: '100%',
                  height: 380,
                },
              }}
            >
              <Paper>
                <Stack
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    m: 0,
                  }}
                >
                  
                <Shaker signUpState={signUpState} signInState={signInState} wiggleState={wiggleState} setWiggleState={setWiggleState} /> 
                  <Button
                    onClick={handleSignUpClick}
                    sx={{
                      mt: 2,
                      mb: 0,
                    }}
                  >
                    {signUpState ? 'Log In' : 'Sign Up'}
                  </Button>
                </Stack>
                <form onSubmit={handleSubmit}>
                  <Stack sx={{ mx: 3 }}>
                    <TextField
                      sx={{ mx: 3, mt: 2 }}
                      placeholder='UserName'
                      name='username'
                      onChange={handleUserChange}
                    />
                    <TextField
                      sx={{ m: 3, mt: 3 }}
                      placeholder='password'
                      name='password'
                      onChange={handlePasswordChange}
                    />
                    <Button
                      type='submit'
                      sx={{ mx: 3, width: '50%', alignSelf: 'center' }}
                      variant='outlined'
                    >
                      {signUpState ? 'Sign Up' : 'Log In'}
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Box>
          </Stack>
        </Box>
      </When>
    </>
  );
};

export default Login;
