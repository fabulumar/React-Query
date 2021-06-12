import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";

const MakeQuery = (name, func, params) => {
  return useQuery(name, func, params);
};

const MakeInfiniteQuery = (name, func, params) => {
  return useInfiniteQuery(name, func, params);
};

//Planets
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

// Todo
export const getAllTodo = () => {
  const getTodoFunc = async () => {
    const response = await axios.get(
      "https://appbox-e8e3.restdb.io/rest/todo",
      {
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "60bcf007f2a01c34b8ed35a3",
        },
      }
    );
    return response;
  };
  return MakeQuery("get_all_todo", getTodoFunc);
};

export const postTodo = async (newTodo) => {
  return await axios.post("https://appbox-e8e3.restdb.io/rest/todo", newTodo, {
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "60bcf007f2a01c34b8ed35a3",
    },
  });
};

export const putTodo = async (editData) => {
  return await axios.put(
    `https://appbox-e8e3.restdb.io/rest/todo/${editData.id}`,
    editData.data,
    {
      headers: {
        "cache-control": "no-cache",
        "x-apikey": "60bcf007f2a01c34b8ed35a3",
      },
    }
  );
};

export const deleteTodo = async (todoId) => {
  return await axios.delete(
    `https://appbox-e8e3.restdb.io/rest/todo/${todoId}`,
    {
      headers: {
        "cache-control": "no-cache",
        "x-apikey": "60bcf007f2a01c34b8ed35a3",
      },
    }
  );
};

// Employee Details
export const getAllEmployees = () => {
  const getEmployeesFunc = async () => {
    const response = await axios.get(
      "https://appbox-e8e3.restdb.io/rest/employee-info",
      {
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "60bcf007f2a01c34b8ed35a3",
        },
      }
    );
    return response;
  };
  return MakeQuery("get_all_employees", getEmployeesFunc);
};
