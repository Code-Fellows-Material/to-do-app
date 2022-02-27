import React, { useState, useContext } from 'react';
import { When } from 'react-if';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';

import { LoginContext } from '../../context/LoginContext';

let initialState = { username: '', password: '' };

const Login = () => {
  const login = useContext(LoginContext);

  const [loginState, setLoginState] = useState(initialState);

  const handlePasswordChange = (e) => {
    setLoginState((prev) => ({ ...prev, password: e.target.value }));
  };
  const handleUserChange = (e) => {
    setLoginState((prev) => ({ ...prev, username: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginState);

    login.login(loginState.username, loginState.password);
  };

  return (
    <>
      <When condition={login.loggedIn}>
        {/* <Button onClick={login.logout}>Log Out</Button> */}
      </When>
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
            <Card variant="outlined" sx={{backgroundColor: '#1976D2', border: '4px solid white', borderRadius: '14px'}}>
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
                  height: 400,
                },
              }}
            >
              <Paper>
                <Paper
                  sx={{ m: 3, backgroundColor: '#1976D2', width: '400px' }}
                >
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                    variant='h2'
                  >
                    Log In
                  </Typography>
                </Paper>

                <form onSubmit={handleSubmit}>
                  <Stack sx={{ m: 3 }}>
                    <TextField
                      sx={{ m: 3 }}
                      placeholder='UserName'
                      name='username'
                      onChange={handleUserChange}
                    />
                    <TextField
                      sx={{ m: 3 }}
                      placeholder='password'
                      name='password'
                      onChange={handlePasswordChange}
                    />
                    <Button
                      type='submit'
                      sx={{ mx: 3, width: '50%', alignSelf: 'center' }}
                      variant='outlined'
                    >
                      Login
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
