import { handleActions } from "redux-actions";
import {
  fetchTodoList,
  addTodo,
  updateTodo,
  deleteTodo,
  clearCompleted,
  changeFilterType,
} from "./actions";
import { TODO_STATUS_ENUM } from "../../constants/todo";

const initState = {
  todoList: [],
  filterType: TODO_STATUS_ENUM.ALl,
};

const reducer = handleActions(
  {
    [fetchTodoList]: (state, { payload: todoList = [] }) => {
      return {
        ...state,
        todoList,
      };
    },
    [updateTodo]: (state, { payload: todo = {} }) => {
      const todoList = state.todoList.map((item) => {
        if (item.uuid === todo.uuid) {
          return todo;
        }
        return item;
      });
      return {
        ...state,
        todoList,
      };
    },
    [deleteTodo]: (state, { payload: uuid }) => {
      const todoList = state.todoList.filter((item) => item.uuid !== uuid);
      return {
        ...state,
        todoList,
      };
    },
    [addTodo]: (state, { payload: todo }) => {
      const todoList = state.todoList.concat(todo);
      return {
        ...state,
        todoList,
      };
    },
    [clearCompleted]: (state) => {
      const todoList = state.todoList.filter(
        (item) => item.completeStatus === TODO_STATUS_ENUM.ACTIVE
      );
      return {
        ...state,
        todoList,
      };
    },
    [changeFilterType]: (state, { payload: filterType }) => {
      return {
        ...state,
        filterType,
      };
    },
  },
  initState
);

export default reducer;
