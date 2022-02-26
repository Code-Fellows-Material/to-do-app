import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { SiteContext } from '../../context/SiteContext';
import makeItems from './makeItems'
import setShowArr from './setShowArr';

function Items({ list, toggleComplete, incomplete: incompleteCount  }) {
  
  let totalItems = 0;
  // access site context state and grab the 
  let siteContext = useContext(SiteContext);
  const numToShow = siteContext.state.numItemsToDisplay;
  const displayComplete = siteContext.state.displayComplete;

  const setTotalItems = (num) => {
    totalItems = num;
  }

  // set component state 
  const [pageNum, setPageNum] = useState(0);

  return (
    <>
      <Box style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          style={{ margin: '10px' }}
          onClick={() => {
            pageNum > 0 && setPageNum(pageNum - 1);
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
          {pageNum + 1}
        </div>
        <Button
          variant='outlined'
          style={{ margin: '10px' }}
          onClick={() => {
            if((pageNum + 1) * numToShow <= totalItems){
            setPageNum(pageNum + 1);
            }
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
            height: '100%'
          },
        }}
      >
      {makeItems(setShowArr(numToShow, pageNum, list, displayComplete, setTotalItems), toggleComplete)}
      </Box>
    </>
  );
}

export default Items;
