import React, { useState } from "react";
import { getPlanetsById } from "../hooks";

import Pagination from "../components/Pagination";
import Card from "../components/Card";
import Loader from "../components/Loader";
import styled from "styled-components";

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

const Paginated = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, status, isFetching } = getPlanetsById(pageNo);
  const planetLists = data?.data.results;

  return (
    <Card transparent width="700px" centered>
      <Pagination
        onPrevClick={() => setPageNo(pageNo - 1)}
        onNextClick={() => setPageNo(pageNo + 1)}
        pageNo={pageNo}
        status={isFetching && "loading..."}
        isPrevDisabled={!data?.data.previous}
        isNextDisabled={!data?.data.next}
      ></Pagination>
      {status === "loading" ? (
        <Loader />
      ) : status === "success" ? (
        <div className="item-wrapper">
          {planetLists.map((planet, index) => (
            <StyledCard key={index}>
              <h4>{planet.name}</h4>
              <p>Climate: {planet.climate}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Diameter:{planet.diameter}</p>
            </StyledCard>
          ))}
        </div>
      ) : (
        "Some error occurred. Please try again later"
      )}
    </Card>
  );
};

export default Paginated;
