import Home from "./components/pages/Home/Home";
import React from "react";
import AppBar from "@mui/material/AppBar"
import './App.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  return <>
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            F1 Rankings
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Home />
  </>;
};

export default App;
