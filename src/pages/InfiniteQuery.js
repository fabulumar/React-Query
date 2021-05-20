import React from "react";
import Button from "../components/Button";
import { getPlanetsAsInfinite } from "../hooks/index";
import Card from "../components/Card";

const InfiniteQuery = () => {
  const {
    data,
    isLoading,
    status,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = getPlanetsAsInfinite();

  const getPlanetList = () => {
    const list = [];
    data &&
      data.pages.forEach((page) =>
        page.data.results.forEach((result) => list.push(result))
      );
    return list;
  };
  const planetList = getPlanetList();

  return (
    <div className="container">
      {status === "loading" && "Loading Planets..."}
      {status === "success" && (
        <div className="item-wrapper">
          {planetList &&
            planetList.length &&
            planetList.map((planet, index) => (
              <Card key={index}>
                <h4>
                  {index + 1}: {planet.name}
                </h4>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Diameter:{planet.diameter}</p>
              </Card>
            ))}
        </div>
      )}
      {!isLoading && (
        <div className="button-wrapper">
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="button"
          >
            {isFetchingNextPage
              ? "Loading..."
              : hasNextPage
              ? "Show More"
              : "Nothing more to load"}
          </Button>
        </div>
      )}
      {status === "error" && "Some error occurred. Please try again later"}
    </div>
  );
};

export default InfiniteQuery;
