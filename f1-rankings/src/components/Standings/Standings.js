import { useConstuctorStandings } from "../../queries/standing.query";
import { BasicTable } from "../Table/BasicTable";

const Standings = () => {
  // react query
  // data is what comes back from API
  // isLoading is the state of the API request
  // the brackets wrapping data etc. is called destructuring
  const {data, isLoading} = useConstuctorStandings();
  return (
    <>
      <h1 id="heading">F1 Rankings</h1>
      {/* ternary operator */}
      {isLoading && <p>Loading</p>}
      {!isLoading && data && (
        <BasicTable />
      )}
    </>);
};

export default Standings;
