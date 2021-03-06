import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { getPlanetsAsInfinite } from "../hooks/index";
import Card from "../components/Card";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const ButtonWrapper = styled.div`
  position: sticky;
  bottom: 0px;
  background: rgb(255 255 255);
  padding: 10px 0px;
`;

const StyledCard = styled(Card)`
  h4 {
    margin: 0px 0px 15px 0px;
  }
  p {
    margin: 0px 0px 5px 0px;
    color: rgb(38 38 38);
    font-size: 15px;
  }
`;

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
    <>
      {status === "loading" ? (
        <Loader />
      ) : status === "success" ? (
        <>
          {planetList &&
            planetList.length &&
            planetList.map((planet, index) => (
              <StyledCard key={index} width="700px" centered>
                <h4>
                  {index + 1}: {planet.name}
                </h4>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Diameter:{planet.diameter}</p>
              </StyledCard>
            ))}
        </>
      ) : (
        <ErrorMessage />
      )}

      {!isLoading && (
        <ButtonWrapper>
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
        </ButtonWrapper>
      )}
    </>
  );
};

export default InfiniteQuery;
