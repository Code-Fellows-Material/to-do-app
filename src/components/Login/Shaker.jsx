import React, { useState, useEffect } from 'react';
import { Shake } from 'reshake';
import { When } from 'react-if';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Shaker = ({ signUpState, signInState, wiggleState, setWiggleState }) => {
  console.log(signUpState, signInState)

  if(wiggleState){
    setTimeout(() => {
      setWiggleState(false);
    }, 600);
  }


  return (
    <>
      <When condition={!signUpState}>
        <When condition={wiggleState}>
          <Shake
            h={5}
            v={5}
            r={3}
            dur={300}
            int={10}
            max={100}
            fixed={true}
            fixedStop={true}
            freeze={false}
          >
            <Paper
              sx={{
                mx: 3,
                mt: 3,
                mb: 0,
                backgroundColor: signInState
                  ? '#1976D2'
                  : 'rgba(193, 66, 66, 0.8)',
                width: '400px',
              }}
            >
              <Typography
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                }}
                variant='h2'
              >
                {signUpState ? 'Sign Up' : 'Log In'}
              </Typography>
            </Paper>
          </Shake>
        </When>{' '}
        <When condition={!wiggleState}>
          <Paper
            sx={{
              mx: 3,
              mt: 3,
              mb: 0,
              backgroundColor: signInState
                ? '#1976D2'
                : 'rgba(193, 66, 66, 0.8)',
              width: '400px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
              }}
              variant='h2'
            >
              {signUpState ? 'Sign Up' : 'Log In'}
            </Typography>
          </Paper>
        </When>
      </When>
      <When condition={signUpState}>
        <Paper
          sx={{
            mx: 3,
            mt: 3,
            mb: 0,
            backgroundColor: signUpState ? '#1976D2' : 'rgba(193, 66, 66, 0.8)',
            width: '400px',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'white',
            }}
            variant='h2'
          >
            {signUpState ? 'Sign Up' : 'Log In'}
          </Typography>
        </Paper>
      </When>
    </>
  );
};

export default Shaker;
