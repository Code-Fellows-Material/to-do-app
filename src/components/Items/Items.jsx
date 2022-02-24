import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { SiteContext } from '../../context/SiteContext';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

function Items({ list, toggleComplete }) {
  let siteContext = useContext(SiteContext);
  const [showIndex, setShowIndex] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const numToShow = siteContext.state.numItemsToDisplay;

  let items = list.map((item) => (
    <Box
      key={Math.random()*10}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '85%',
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
            <Typography sx={{ m: 2 }} variant='h6' gutterBottom component='div'>
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
        </Stack>
      </Paper>
    </Box>
  ));

  function setItems(itemList, num) {
    if (items.length <= numToShow) return items;
    let tempArr = [];
    for (let i = showIndex; i < showIndex + num; i++) {
      tempArr.push(itemList[i]);
    }
    return tempArr;
  }

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          style={{ margin: '10px' }}
          onClick={() => {
            pageNum > 1 && setShowIndex(showIndex - numToShow);
            pageNum > 1 && setPageNum(pageNum - 1);
          }}
        >
          prev
        </Button>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2em',
          }}
        >
          {pageNum}
        </div>
        <Button
          variant='outlined'
          style={{ margin: '10px' }}
          onClick={() => {
            setShowIndex(showIndex + numToShow);
            setPageNum(pageNum + 1);
          }}
        >
          next
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            mb: 3,
            p:3,
            width: '90%',
          },
        }}
      >
        <Paper elevation={2}>{setItems(items, numToShow)}</Paper>
      </Box>
    </>
  );
}

export default Items;
