import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled(Card)`
  display: flex;
  padding: 0px 15px;
  transition: 0.3s ease;
  transition-property: background, box-shadow;
  box-sizing: border-box;
  label {
    padding: 10px 2px;
    width: 100%;
    cursor: pointer;
    user-select: none;
    input[type="checkbox"] {
      margin-right: 12px;
    }
  }
  &:hover {
    box-shadow: 2px 3px 10px -3px rgb(52 73 122 / 25%);
    background: rgb(246 246 246 / 70%);
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
    font-style: 12px;
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
        <span id={id} onClick={onEditClick} className="edit">
          <FontAwesomeIcon icon="pen" size="sm" />
        </span>
        <span id={id} onClick={onDeleteClick} className="delete">
          <FontAwesomeIcon icon="trash-alt" size="sm" />
        </span>
      </ActionWrapper>
    </Wrapper>
  );
};

export default TodoItem;
