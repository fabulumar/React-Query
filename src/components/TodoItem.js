import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";

const Wrapper = styled(Card)`
  display: flex;
  padding: 0px 15px;
  transition: 0.3s ease;
  transition-property: opacity, box-shadow, border-color;
  label {
    padding: 10px 2px;
    width: 100%;
    cursor: pointer;
    user-select: none;
    input[type="checkbox"] {
      margin-right: 12px;
    }
  }
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
    title,
    isCompleted,
    isLoading,
  } = props;
  return (
    <Wrapper key={id} isCompleted={isCompleted}>
      <Checkbox
        id={id}
        type="checkbox"
        checked={isCompleted}
        aria-checked={isCompleted}
        onChange={handleTodoCheck}
        isLoading={isLoading}
      >
        {title}
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
