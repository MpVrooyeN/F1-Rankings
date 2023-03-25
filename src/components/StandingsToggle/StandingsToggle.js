import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const StandingsToggle = ({ setToggleChoice }) => {
  return (
    <ToggleButtonGroup
      data-testid="StandingsToggle"
      exclusive
      onChange={(_, v) => setToggleChoice(v)}
      aria-label="text alignment"
    >
      <ToggleButton value={"teams"}>Constructor</ToggleButton>
      <ToggleButton value={"drivers"}>Driver</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default StandingsToggle;
