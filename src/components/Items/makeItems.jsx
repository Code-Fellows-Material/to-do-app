import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default (list, toggleComplete) => {
  let items = list.map((item) => (
    <Box
      key={Math.random()*10}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 0,
          width: '65%',
          height: 150,
        },
      }}
    >
      <Paper elevation={2}>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card
            variant='outlined'
            sx={{
              backgroundColor: item.complete ? 'lightGrey' : '#1976D2',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ m: 2, color: 'white' }} variant='h5' gutterBottom component='div'>
              {item.text}
            </Typography>
          </Card>
          <Stack
            direction='row'
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              textAlign: 'center',
              pt: 3,
            }}
          >
            <Paper>
              <Typography
                sx={{ m: 2 }}
                variant='h6'
                gutterBottom
                component='span'
              >
                Assigned to: {item.assignee}
              </Typography>
            </Paper>

            <Paper>
              <Typography
                sx={{ m: 2 }}
                variant='h6'
                gutterBottom
                component='span'
              >
                Difficulty: {item.difficulty}
              </Typography>
            </Paper>
            <Paper>
              <Typography
                sx={{ m: 3 }}
                variant='h6'
                gutterBottom
                component='span'
              >
                Complete: {item.complete.toString()}
              </Typography>
            </Paper>

            <Button
              sx={{
                backgroundColor: item.complete ? 'lightGrey' : '#1976D2',
              }}
              variant='contained'
              onClick={() => toggleComplete(item.id)}
            >
              Complete
            </Button>
          </Stack>
          {/* {item.id} */}
        </Stack>
      </Paper>
    </Box>
  ));
  return items
}

