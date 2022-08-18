import { useEffect } from "react";
import TodoHeader from "./todo-header";
import TodoList from "./todo-list";
import TodoFooter from "./todo-footer";
import { TodoAction } from "../../dao/todo";
import { useDispatch } from "react-redux";
import "./todo.css";

function TodoApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoAction.fetchTodoList());
  }, [dispatch]);

  return (
    <div className="todoapp">
      <TodoHeader />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default TodoApp;
