import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default (list, toggleComplete, deleteItem) => {
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
                Complete: {String(item.complete)}
              </Typography>
            </Paper>

            <Stack direction={'row'}>
            <Button
              sx={{
                backgroundColor: item.complete ? 'lightGrey' : '#1976D2',
                mx: 1
              }}
              variant='contained'
              onClick={() => toggleComplete(item.id)}
            >
              Complete
            </Button>
            <Button
              sx={{
                color: 'rgba(193, 66, 66)',
                borderColor: 'rgba(193, 66, 66)',
                mx: 1
              }}
              variant='outlined'
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </Button>
            </Stack>
          </Stack>
          {/* {item.id} */}
        </Stack>
      </Paper>
    </Box>
  ));
  return items
}

