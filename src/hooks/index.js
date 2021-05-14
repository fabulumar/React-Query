import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";

const MakeQuery = (name, func, params) => {
  return useQuery(name, func, params);
};

const MakeInfiniteQuery = (name, func, params) => {
  return useInfiniteQuery(name, func, params);
};

export const getPlanets = () => {
  const getPlanetsFunc = async () => {
    return await axios.get("http://swapi.dev/api/planets");
  };
  return MakeQuery("get_planets", getPlanetsFunc);
};

export const getPlanetsById = (id) => {
  const getPlanetsFunc = async () => {
    return await axios.get(`http://swapi.dev/api/planets/?page=${id}`);
  };
  return MakeQuery(["get_planets_by_id", id], getPlanetsFunc, {
    keepPreviousData: true,
  });
};

export const getPlanetsAsInfinite = () => {
  const getPlanetFunc = async ({
    pageParam = "http://swapi.dev/api/planets/",
  }) => {
    const data = await axios.get(pageParam);
    return data;
  };
  return MakeInfiniteQuery("get_planets_as_infinite", getPlanetFunc, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.next;
    },
  });
};
