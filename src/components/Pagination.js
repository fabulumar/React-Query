import React from "react";

const Pagination = (props) => {
  const {
    onPrevClick,
    isPrevDisabled,
    isNextDisabled,
    onNextClick,
    status,
    pageNo,
  } = props;
  return (
    <div className="pagination-root">
      <ul className="pagination">
        <li onClick={onPrevClick} className={isPrevDisabled ? "disabled" : ""}>
          Prev
        </li>
        <li onClick={onNextClick} className={isNextDisabled ? "disabled" : ""}>
          {status || "Next"}
        </li>
      </ul>
      {pageNo && (
        <div className="page-number-wrapper">
          <span className="page-text">Page |</span>
          <span className="page-number">{pageNo}</span>
        </div>
      )}
    </div>
  );
};
export default Pagination;
