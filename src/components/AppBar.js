import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';


const MyAppBar = function (props) {
  return (

    <AppBar position="static" style={{ backgroundColor: "#28293D" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"

          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your Tasks
        </Typography>
        <Button style={{backgroundColor:"#f02663", color:"white"}} onClick={props.modalHandler}>Add Task ➕</Button>
      </Toolbar>
    </AppBar>

  );

}

export default MyAppBar;
