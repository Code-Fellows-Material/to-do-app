import * as React from 'react';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SiteContext } from '../../context/SiteContext';

export default function NavMenu({anchorEl, open, handleClose}) {
  let siteContext = useContext(SiteContext);
  const toggleDisplay = siteContext.state.toggleDisplay;


  return (
    <Menu
    id='basic-menu'
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    <MenuItem onClick={
      () => {
        toggleDisplay();
        handleClose();
      }
    }>Show Completed Items</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>
  );
}