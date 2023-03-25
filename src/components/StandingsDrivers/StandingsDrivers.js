import { CircularProgress } from "@mui/material";
import React from "react";

import { useDriverStandings } from "../../queries/standing.query";
import BasicTable from "../Table/BasicTable";
import { DriverColumns } from "../Table/Columns";

const StandingsDrivers = () => {
  const { data, isLoading } = useDriverStandings();

  return (
    <div data-testid="StandingsDrivers">
      {isLoading && <CircularProgress />}
      {!isLoading && data && <BasicTable data={data} columns={DriverColumns} />}
    </div>
  );
};

export default StandingsDrivers;
