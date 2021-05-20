import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  padding: 15px 0;
  p {
    margin: 0;
  }
  .completed-todo {
    font-size: 50px;
    font-weight: 500;
    margin-right: 16px;
  }
  .total-todo {
    position: relative;
    font-size: 20px;
    overflow: visible;
    width: 30px;
    ::before {
      content: "";
      position: absolute;
      left: -21px;
      top: 4px;
      height: 3px;
      width: 25px;
      background: rgb(255 0 0);
      transform: rotate(110deg);
    }
  }
`;

const TodoHeader = (props) => {
  const { completedTodo, totalTodo } = props;
  return (
    <Root>
      <p className="completed-todo">{completedTodo}</p>
      <p className="total-todo">{totalTodo}</p>
    </Root>
  );
};

export default TodoHeader;
