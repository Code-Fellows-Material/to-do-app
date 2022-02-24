import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function Form({ handleChange, handleSubmit, handleSlide }) {
  function onChangeSlider(event, newValue) {
    handleSlide(newValue);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '50%',
          height: 230,
        },
      }}
    >
      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <Typography sx={{ m: 2 }} variant='h6' gutterBottom component='div'>
            Add To Do:
          </Typography>

          <Stack spacing={1}>
            <Stack
              direction='row'
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
              spacing={3}
            >
              <TextField
                hiddenLabel
                id='filled-hidden-label-normal'
                variant='filled'
                onChange={handleChange}
                name='text'
                type='text'
                placeholder='Item Details'
              />
              <TextField
                hiddenLabel
                id='filled-hidden-label-normal'
                variant='filled'
                onChange={handleChange}
                name='assignee'
                type='text'
                placeholder='Assignee Name'
              />
            </Stack>
            <Box sx={{ pt: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography variant='h6' mx={3} gutterBottom>
                Difficulty
              </Typography>
              <Slider
                sx={{ width: '50%' }}
                onChangeCommitted={onChangeSlider}
                size='large'
                step={1}
                min={1}
                max={5}
                defaultValue={0}
                name='difficulty'
                valueLabelDisplay='auto'
                aria-label='hi'
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button  size='medium' type='submit' variant='outlined'>
                Add Item
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}

export default Form;
