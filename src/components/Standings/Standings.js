import BasicTable from "../Table/BasicTable";
import React from "react";

const Standings = (props) => {
  // react query
  // data is what comes back from API
  // isLoading is the state of the API request
  // the brackets wrapping data etc. is called destructuring
  return (
    <>
      <BasicTable {...props}/>
    </>);
};

export default Standings;
