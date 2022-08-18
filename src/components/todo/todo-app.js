import { useEffect } from "react";
import TodoHeader from "./todo-header";
import TodoList from "./todo-list";
import TodoFooter from "./todo-footer";
import { fetchTodoList } from "../../dao/actions";
import { useDispatch } from "react-redux";
import "./todo.css";

function TodoApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoList());
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
