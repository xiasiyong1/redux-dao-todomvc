import { createSelector } from "reselect";
import { TODO_STATUS_ENUM } from "../../constants/todo";

const selectTodoList = (state) => state.todo.todoList;
const selectFilterType = (state) => state.todo.filterType;

const getTodoListByStatus =
  (completeStatus = TODO_STATUS_ENUM.ALl) =>
  (state) => {
    if (completeStatus === TODO_STATUS_ENUM.ALl) {
      return selectTodoList(state);
    }
    if (completeStatus === TODO_STATUS_ENUM.COMPLETED) {
      return selectTodoList(state).filter(
        (todo) => todo.completeStatus === TODO_STATUS_ENUM.COMPLETED
      );
    }
    if (completeStatus === TODO_STATUS_ENUM.ACTIVE) {
      return selectTodoList(state).filter(
        (todo) => todo.completeStatus === TODO_STATUS_ENUM.ACTIVE
      );
    }
  };

const selectTodoListByStatus = createSelector(
  selectTodoList,
  selectFilterType,
  (todoList, filterType = TODO_STATUS_ENUM.ALl) => {
    if (filterType === TODO_STATUS_ENUM.ALl) {
      return todoList;
    }

    return todoList.filter((todo) => todo.completeStatus === filterType);
  }
);

// item left
const selectLeftTodo = createSelector(selectTodoList, (todoList = []) => {
  return todoList.filter(
    (item) => item.completeStatus === TODO_STATUS_ENUM.ACTIVE
  ).length;
});

export {
  selectTodoList,
  getTodoListByStatus,
  selectLeftTodo,
  selectFilterType,
  selectTodoListByStatus,
};
