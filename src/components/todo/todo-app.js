import { useEffect } from "react";
import TodoHeader from "./todo-header";
import TodoList from "./todo-list";
import TodoFooter from "./todo-footer";
import useTodo from "../../hooks/todo";
import "./todo.css";

function TodoApp() {
  const {
    fetchTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
    todoListByStatus,
    leftTodo,
    filterType,
    clearCompleted,
    changeFilterType,
  } = useTodo();

  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return (
    <div className="todoapp">
      <TodoHeader addTodo={addTodo} />
      <TodoList
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        todoListByStatus={todoListByStatus}
      />
      <TodoFooter
        leftTodo={leftTodo}
        filterType={filterType}
        clearCompleted={clearCompleted}
        changeFilterType={changeFilterType}
      />
    </div>
  );
}

export default TodoApp;
