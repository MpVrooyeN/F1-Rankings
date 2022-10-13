import { useStandings } from "../../queries/standing.query";

const Standings = () => {
  // react query
  // data is what comes back from API
  // isLoading is the state of the API request
  // the brackets wrapping data etc. is called destructuring
  const { data, isLoading } = useStandings();

  return (
    <>
      <h1>Rankings</h1>
      {/* ternary operator */}
      {isLoading && <p>Loading</p>}
      {!isLoading && data && (
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th>Team name</th>
              <th>Position</th>
              <th>Points</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={JSON.stringify(item)}>
                <td>{item?.Constructor?.name}</td>
                <td>{item?.position}</td>
                <td>{item?.points}</td>
                <td>{item?.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Standings;
