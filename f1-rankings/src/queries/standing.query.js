import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/axios.hook";

// CRUD functions Create, Read (single/plural), Update, Delete
// CRUD also links up to HTTP method types
// react queries are hooks

// get all standings
export const useStandings = () => {
  const { create } = useAxios();

  return useQuery(["standings"], async () => {
    try {
      const result = await create.get("constructorStandings.json");

      // ?. optional chaining
      return result?.data?.MRData?.StandingsTable?.StandingsLists[0]
        ?.ConstructorStandings;
    } catch (e) {
      console.log("query error:", e);
    }
  });
};

// get single standing example
export const useStanding = () => {
  const { create } = useAxios();

  return useQuery(["standings"], async () => {
    try {
      const result = await create.get("constructorStanding.json/1");

      return result?.data?.MRData?.ConstructorStandings;
    } catch (e) {
      console.log("query error:", e);
    }
  });
};
