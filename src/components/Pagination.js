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
      padding: 7px 24px;
      background: var(--primary-fill);
      color: rgb(255, 255, 255);
      box-shadow: 0px 0px 3px rgb(0 0 0 / 8%);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      &:not(.disabled):hover {
        background: var(--primary-hover-fill);
      }
      &:first-child {
        border-radius: 3px 0px 0px 3px;
      }
      &:last-child {
        border-radius: 0px 3px 3px 0px;
      }
      &.disabled {
        color: var(--primary-disabled-color);
        background: var(--primary-disabled-fill);
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
      color: var(--primary-fill);
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
