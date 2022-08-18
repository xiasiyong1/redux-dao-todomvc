import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { TodoAction, TodoSelector } from "../dao/todo";

function useTodo() {
  const dispatch = useDispatch();

  const fetchTodoList = useCallback(
    (todo) => {
      dispatch(TodoAction.fetchTodoList());
    },
    [dispatch]
  );

  const updateTodo = useCallback(
    (todo) => {
      dispatch(TodoAction.updateTodo(todo));
    },
    [dispatch]
  );
  const deleteTodo = useCallback(
    (uuid) => {
      dispatch(TodoAction.deleteTodo(uuid));
    },
    [dispatch]
  );

  const addTodo = useCallback(
    (name) => {
      dispatch(TodoAction.addTodo(name));
    },
    [dispatch]
  );

  const clearCompleted = useCallback(() => {
    dispatch(TodoAction.clearCompleted());
  }, [dispatch]);

  const changeFilterType = useCallback(
    (filterType) => {
      dispatch(TodoAction.changeFilterType(filterType));
    },
    [dispatch]
  );

  const todoListByStatus = useSelector(TodoSelector.selectTodoListByStatus);

  const leftTodo = useSelector(TodoSelector.selectLeftTodo);
  const filterType = useSelector(TodoSelector.selectFilterType);

  return {
    fetchTodoList,
    updateTodo,
    deleteTodo,
    addTodo,
    todoListByStatus,
    leftTodo,
    filterType,
    clearCompleted,
    changeFilterType,
  };
}

export default useTodo;
