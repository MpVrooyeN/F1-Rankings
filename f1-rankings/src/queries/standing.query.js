import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/axios.hook";
import React from "react";

// CRUD functions Create, Read (single/plural), Update, Delete
// CRUD also links up to HTTP method types
// react queries are hooks
// get all standings
export const useConstuctorStandings = () => {
  const { create } = useAxios();
  return useQuery(["standings"], async () => {
    try {
      let result = await create.get("constructorStandings.json");
        // ?. optional chaining
        return result?.data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings;
    } catch (e) {
      console.log("query error:", e);
    }
  });
};

export const useDriverStandings = () => {
  const { create } = useAxios();
  return useQuery(["standings"], async () => {
    try {
      let result = await create.get("driverStandings.json");
        // ?. optional chaining
        return result?.data?.MRData?.StandingsTable?.StandingsLists[0]?.ConstructorStandings;
    } catch (e) {
      console.log("query error:", e);
    }
  });
};
