import { useConstuctorStandings } from "../../queries/standing.query";
import { BasicTable } from "../Table/BasicTable";
import React from "react";

const Standings = () => {
  // react query
  // data is what comes back from API
  // isLoading is the state of the API request
  // the brackets wrapping data etc. is called destructuring
  const {data, isLoading} = useConstuctorStandings();
  return (
    <>
      
      {/* ternary operator */}
      {isLoading && <p>Loading</p>}
      {!isLoading && data && (
        <BasicTable />
      )}
    </>);
};

export default Standings;
