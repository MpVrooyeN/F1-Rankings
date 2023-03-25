import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import StandingsToggle from "../../StandingsToggle/StandingsToggle";

const standingTypes = {
  teams: "F1 Team Standings",
  drivers: "F1 Driver Standings",
};

const Heading = ({ toggleChoice, setToggleChoice }) => {
  const [title, setTitle] = useState();

  useEffect(() => setTitle(standingTypes[toggleChoice]), [toggleChoice]);

  return (
    <Box data-testid="Heading" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <Typography
            variant="h6"
            id="heading"
            component="div"
            fontWeight={1000}
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <StandingsToggle setToggleChoice={setToggleChoice} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Heading;
