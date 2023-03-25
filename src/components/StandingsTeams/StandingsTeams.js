import { CircularProgress } from "@mui/material";
import React from "react";

import { useConstuctorStandings } from "../../queries/standing.query";
import BasicTable from "../Table/BasicTable";
import { ConstructorColumns } from "../Table/Columns";

const StandingsTeams = () => {
  const { data, isLoading } = useConstuctorStandings();

  return (
    <div data-testid="StandingsTeams">
      {isLoading && <CircularProgress />}
      {!isLoading && data && (
        <BasicTable data={data} columns={ConstructorColumns} />
      )}
    </div>
  );
};

export default StandingsTeams;
