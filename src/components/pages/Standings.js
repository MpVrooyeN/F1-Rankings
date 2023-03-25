import * as React from "react";
import { useState } from "react";

import Heading from "../Layout/Heading/Heading";
import StandingsDrivers from "../StandingsDrivers/StandingsDrivers";
import StandingsTeams from "../StandingsTeams/StandingsTeams";

const Standings = () => {
  const [toggleChoice, setToggleChoice] = useState("teams");

  if (toggleChoice === "teams") {
    return (
      <>
        <Heading
          toggleChoice={toggleChoice}
          setToggleChoice={setToggleChoice}
        />
        <StandingsTeams />
      </>
    );
  }

  if (toggleChoice === "drivers") {
    return (
      <>
        <Heading
          toggleChoice={toggleChoice}
          setToggleChoice={setToggleChoice}
        />
        <StandingsDrivers />
      </>
    );
  }
};
export default Standings;
