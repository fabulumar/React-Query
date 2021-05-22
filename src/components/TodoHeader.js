import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 15px 0;
`;

const CompletedTodo = styled.p`
  font-size: 50px;
  font-weight: 500;
  margin: 0px 16px 0px 0px;
`;

const TotalTodo = styled.p`
  position: relative;
  font-size: 20px;
  overflow: visible;
  width: 30px;
  margin: 0px;
  ::before {
    content: "";
    position: absolute;
    left: -21px;
    top: 4px;
    height: 3px;
    width: 25px;
    background: var(--primary-fill);
    transform: rotate(110deg);
  }
`;

const TodoHeader = (props) => {
  const { completedTodo, totalTodo } = props;
  return (
    <Root>
      <CompletedTodo>{completedTodo}</CompletedTodo>
      <TotalTodo>{totalTodo}</TotalTodo>
    </Root>
  );
};

export default TodoHeader;
