import React, { useState } from "react";
import { getPlanetsById } from "../hooks";

import Pagination from "../components/Pagination";

const Paginated = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data, status, isFetching } = getPlanetsById(pageNo);
  const planetLists = data?.data.results;

  return (
    <div className="container">
      <Pagination
        onPrevClick={() => setPageNo(pageNo - 1)}
        onNextClick={() => setPageNo(pageNo + 1)}
        pageNo={pageNo}
        status={isFetching && "loading..."}
        isPrevDisabled={!data?.data.previous}
        isNextDisabled={!data?.data.next}
      ></Pagination>
      {status === "loading" ? (
        "Loading Planets..."
      ) : status === "success" ? (
        <div className="item-wrapper">
          {planetLists.map((planet, index) => (
            <div className="item" key={index}>
              <h4>{planet.name}</h4>
              <p>Climate: {planet.climate}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Diameter:{planet.diameter}</p>
            </div>
          ))}
        </div>
      ) : (
        "Some error occurred. Please try again later"
      )}
    </div>
  );
};

export default Paginated;
