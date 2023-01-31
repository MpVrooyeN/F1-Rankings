import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, ToggleButton, ToggleButtonGroup  } from '@mui/material';
import Home from "./../pages/Home/Home";

const customTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#e22420',
          contrastText: '#000'
        },
        secondary: {
          main: '#f50057',
        },
      },
      typography: {
        fontFamily: 'Titllium',
      },
  });
  

export default function CustomThemeAppBarOption() {
    const [table, setTable] = React.useState('left');
    const switchTables = (event, newTable) => {
        if (newTable !== null) {
            setTable(newTable);
        }
    };
    return (
        <ThemeProvider theme={customTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color={"primary"}>
            <Toolbar>
              <Typography variant="h6" component="div" fontWeight={1000} sx={{ flexGrow: 1 }}>
                F1 Standings
              </Typography>
              <ToggleButtonGroup
                value={table}
                exclusive
                onChange={switchTables}
                aria-label="text alignment">
                    <ToggleButton value={'constructor'}>Constructor
                    </ToggleButton>
                    <ToggleButton value={'driver'}>Driver
                    </ToggleButton>
                </ToggleButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
        <Home />
      </ThemeProvider>
    );
  }