import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";

const Wrapper = styled(Card)`
  display: flex;
  padding: 0px 15px;
  transition: 0.3s ease;
  transition-property: opacity, box-shadow, border-color;
  opacity: ${({ isCompleted }) => (isCompleted ? "0.5" : "1")};
  box-shadow: ${({ isCompleted }) => isCompleted && "none"};
  border-color: ${({ isCompleted }) => isCompleted && "transparent"};
  label {
    padding: 10px 2px;
    width: 100%;
    cursor: pointer;
    user-select: none;
    input[type="checkbox"] {
      margin-right: 12px;
    }
  }
  ${({ isCompleted }) =>
    isCompleted && `&:hover{border: 1px solid rgb(230 233 238 / 86%);}`}
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  span {
    color: grey;
    transition: 0.2s ease;
    transition-property: color;
    :not(:last-child) {
      margin-right: 10px;
    }
    &.edit:hover {
      color: rgb(48 45 45);
    }
    &.delete:hover {
      color: rgb(255 62 0);
    }
  }
`;

const TodoItem = (props) => {
  const {
    id,
    handleTodoCheck,
    onEditClick,
    onDeleteClick,
    children,
    isCompleted,
  } = props;
  return (
    <Wrapper key={id} isCompleted={isCompleted}>
      <Checkbox
        type="checkbox"
        id={id}
        checked={isCompleted}
        aria-checked={isCompleted}
        onChange={handleTodoCheck}
      >
        {children}
      </Checkbox>
      <ActionWrapper>
        <span id={id} onClick={onEditClick} className="icon-note edit"></span>
        <span
          id={id}
          onClick={onDeleteClick}
          className="icon-trash delete"
        ></span>
      </ActionWrapper>
    </Wrapper>
  );
};

export default TodoItem;
