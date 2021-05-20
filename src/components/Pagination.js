import React from "react";
import styled from "styled-components";

const PaginationRoot = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0px;
  background: rgb(255 255 255);
  padding: 10px 0px;
  .pagination {
    list-style-type: none;
    padding-left: 0px;
    li {
      display: inline-block;
      padding: 4px 24px;
      background: rgb(255 230 221);
      color: rgb(255 0 0);
      box-shadow: 0px 0px 3px rgb(0 0 0 / 8%);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      &:not(.disabled):hover {
        background: rgb(250 216 205);
      }
      &:first-child {
        border-radius: 3px 0px 0px 3px;
      }
      &:last-child {
        border-radius: 0px 3px 3px 0px;
      }
      &.disabled {
        color: rgb(255 0 0 / 42%);
        background: rgb(255 230 221 / 43%);
        box-shadow: none;
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }

  .page-number-wrapper {
    margin-left: auto;
    .page-text {
      display: inline-block;
      font-size: 17px;
      margin-right: 4px;
      font-weight: 500;
      color: rgb(255 2 0);
      transform: translateY(-5px);
    }

    .page-number {
      font-size: 50px;
      font-weight: 500;
    }
  }
`;

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
    <PaginationRoot className="pagination-root">
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
    </PaginationRoot>
  );
};
export default Pagination;
