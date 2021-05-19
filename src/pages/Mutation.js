import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, getAllTodo, postTodo, putTodo } from "../hooks/index";

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
    onMutate: async (data) => {
      await queryClient.cancelQueries("get_all_todo");
      let previousTodo = await queryClient.getQueryData("get_all_todo");
      const index = previousTodo.data.findIndex((todo) => todo._id === data.id);
      previousTodo.data[index].isCompleted = !data.data.isCompleted;
      await queryClient.setQueryData("get_all_todo", previousTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("get_all_todo");
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
    const { id, ariaChecked } = e.target;
    const data = {
      id,
      data: {
        isCompleted: ariaChecked === "true" || false,
      },
    };
    checkTodo(data);
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
    <div className="container">
      {status === "loading" && "Loading Todos..."}
      {status === "success" && (
        <>
          <div className="todo-header">
            <p className="completed-todo">{getCompleteTodo()}</p>
            <p className="total-todo">{todoList.length}</p>
          </div>
          <div className="item-wrapper">
            {todoList &&
              todoList.length &&
              todoList.map((todo, index) => (
                <div
                  className={`item todoItem ${
                    todo.isCompleted ? "completed" : ""
                  }`}
                  key={todo._id || index}
                >
                  <label>
                    <input
                      type="checkBox"
                      id={todo._id}
                      checked={todo.isCompleted}
                      aria-checked={todo.isCompleted}
                      onChange={handleTodoCheck}
                    />
                    {todo.title}
                  </label>
                  <div className="action-wrapper">
                    <span
                      className="icon-note edit"
                      id={todo._id}
                      onClick={onEditClick}
                    ></span>
                    <span
                      id={todo._id}
                      onClick={onDeleteClick}
                      className="icon-trash delete"
                    ></span>
                  </div>
                </div>
              ))}
          </div>
          <div className="form-wrapper">
            <div className="checkbox">
              <div className="checkbox-inner" html-for="isCompleted">
                <input
                  type="checkbox"
                  checked={isCompletedTodo}
                  onChange={handleCompletedTodo}
                  id="isCompleted"
                ></input>
              </div>
              <input
                type="text"
                value={todoTitle}
                onChange={handleTitleChange}
                placeholder="What do you want to get done?"
              />
            </div>
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="button"
              disabled={todoTitle === ""}
            >
              {renderButtonText()}
            </button>
          </div>
        </>
      )}
      {status === "error" && "Some error occurred. Please try again later"}
    </div>
  );
};

export default Mutation;
