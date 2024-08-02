import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <TaskAltIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Manager
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;