import axios from "axios";

const useAxios = (baseUrl) => {
  const create = axios.create({
    baseURL: baseUrl || "http://ergast.com/api/f1/current/",
  });

  create.interceptors.request.use((request) => request);

  create.interceptors.response.use(
    (response) => response,
    async (error) => Promise.reject(error)
  );

  return {
    create,
  };
};

export default useAxios;
