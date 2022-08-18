import { createActions } from "redux-actions";
import { normalize } from "normalizr";
import * as Dao from "./dao";
import TodoListScheme from "./schema";
import { getUuid } from "../utils";
import { TODO_STATUS_ENUM } from "../constants/todo";

const {
  fetchTodoList,
  addTodo,
  updateTodo,
  deleteTodo,
  clearCompleted,
  changeFilterType,
} = createActions(
  {
    FETCH_TODO_LIST: () => {
      return Dao.fetchTodoList().then((todoList) => {
        return todoList;
        // normalize(todoList, [TodoListScheme])
      });
    },
    ADD_TODO: (name) => {
      return {
        name,
        uuid: getUuid(),
        completeStatus: TODO_STATUS_ENUM.ACTIVE,
      };
    },
    UPDATE_TODO: (todo) => todo,
    DELETE_TODO: (uuid) => uuid,
    CHANGE_FILTER_TYPE: (filterType) => filterType,
  },
  "CLEAR_COMPLETED"
);

export {
  fetchTodoList,
  addTodo,
  updateTodo,
  deleteTodo,
  clearCompleted,
  changeFilterType,
};
