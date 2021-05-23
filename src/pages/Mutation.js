import React, { useState } from "react";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, getAllTodo, postTodo, putTodo } from "../hooks/index";
import Button, { ButtonRoot } from "../components/Button";
import TextWithCheckBox from "../components/TextWithCheckBox";
import TodoHeader from "../components/TodoHeader";
import TodoItem from "../components/TodoItem";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  input:not(:last-child) {
    margin-right: 8px;
  }
  ${ButtonRoot} {
    min-width: auto;
    margin-left: 16px;
  }
`;

const TodoListWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  max-height: 55vh;
  overflow-y: auto;
`;

const Mutation = () => {
  const queryClient = useQueryClient();
  const [todoTitle, setTodoTitle] = useState("");
  const [isCompletedTodo, setIsCompletedTodo] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const { data, status } = getAllTodo();
  let todoList = data?.data;

  const { mutate, isLoading } = useMutation(postTodo, {
    onMutate: async (newTodo) => {
      setTodoTitle("");
      setIsCompletedTodo(false);
      await queryClient.cancelQueries("get_all_todo");
      let previousTodo = await queryClient.getQueryData("get_all_todo");
      previousTodo.data = [...previousTodo.data, newTodo];
      queryClient.setQueryData("get_all_todo", previousTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("get_all_todo");
    },
  });

  const { mutate: editTodo, isLoading: isUpdating } = useMutation(putTodo, {
    onMutate: async (data) => {
      setTodoTitle("");
      setIsCompletedTodo(false);
      await queryClient.cancelQueries("get_all_todo");
      let previousTodo = await queryClient.getQueryData("get_all_todo");
      const index = previousTodo.data.findIndex((todo) => todo._id === data.id);
      previousTodo.data[index] = data.data;
      queryClient.setQueryData("get_all_todo", previousTodo);
      setIsEditMode(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("get_all_todo");
    },
  });

  const { mutate: deleteTodoItem } = useMutation(deleteTodo, {
    onMutate: async (id) => {
      await queryClient.cancelQueries("get_all_todo");
      let oldData = await queryClient.getQueryData("get_all_todo");
      const filteredData = oldData.data.filter((data) => data._id !== id);
      oldData.data = filteredData;
      queryClient.setQueriesData("get_all_todo", oldData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("get_all_todo");
    },
  });

  const { mutate: checkTodo } = useMutation(putTodo, {
    onMutate: (data) => {
      queryClient.cancelQueries("get_all_todo");
      const oldData = queryClient.getQueryData("get_all_todo");
      const index = oldData.data.findIndex((todo) => todo._id === data.id);
      oldData.data[index].isCompleted = !oldData.data[index].isCompleted;

      queryClient.setQueryData("get_all_todo", oldData);
      return oldData;
    },
    onSuccess: () => {
      queryClient.refetchQueries("get_all_todo");
    },
  });

  const handleTitleChange = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleCompletedTodo = () => {
    setIsCompletedTodo(!isCompletedTodo);
  };

  const handleFormSubmit = () => {
    if (isEditMode) {
      const editData = {
        id: selectedId,
        data: {
          title: todoTitle,
          isCompleted: isCompletedTodo,
        },
      };
      editTodo(editData);
    } else {
      mutate({
        title: todoTitle,
        isCompleted: isCompletedTodo,
      });
    }
  };

  const onEditClick = (e) => {
    const id = e.target.id;
    const selectedTodo = todoList.find((todo) => todo._id === id);
    setSelectedId(id);
    setTodoTitle(selectedTodo.title);
    setIsCompletedTodo(selectedTodo.isCompleted);
    setIsEditMode(true);
  };

  const onDeleteClick = (e) => {
    const id = e.target.id;
    deleteTodoItem(id);
  };

  const handleTodoCheck = (e) => {
    const indexTodo = todoList.findIndex((todo) => todo._id === e.target.id);
    const editData = {
      id: e.target.id,
      data: {
        title: todoList[indexTodo].title,
        isCompleted: !todoList[indexTodo].isCompleted,
      },
    };
    checkTodo(editData);
  };

  const renderButtonText = () => {
    if (isLoading || isUpdating) {
      return "Updating...";
    } else {
      if (isEditMode) {
        return "Update todo";
      }
      return "Add todo";
    }
  };

  const getCompleteTodo = () => {
    let count = 0;
    todoList &&
      todoList.forEach((todo) => {
        if (todo.isCompleted === true) {
          count = count + 1;
        }
      });
    return count;
  };

  return (
    <>
      {status === "loading" ? (
        <Loader />
      ) : status === "success" ? (
        <>
          <TodoHeader
            completedTodo={getCompleteTodo()}
            totalTodo={todoList.length}
          />
          <TodoListWrapper>
            {todoList &&
              todoList.length &&
              todoList.map((todo, index) => (
                <TodoItem
                  key={todo._id || index}
                  id={todo._id}
                  title={todo.title}
                  handleTodoCheck={handleTodoCheck}
                  onEditClick={onEditClick}
                  onDeleteClick={onDeleteClick}
                  isCompleted={todo.isCompleted}
                />
              ))}
          </TodoListWrapper>
          <FormWrapper>
            <TextWithCheckBox
              value={todoTitle}
              onTextChange={handleTitleChange}
              textPlaceholder="What do you want to get done?"
              isCheck={isCompletedTodo}
              onCheckBoxChange={handleCompletedTodo}
            />
            <Button onClick={handleFormSubmit} disabled={todoTitle === ""}>
              {renderButtonText()}
            </Button>
          </FormWrapper>
        </>
      ) : (
        <ErrorMessage />
      )}
    </>
  );
};

export default Mutation;
