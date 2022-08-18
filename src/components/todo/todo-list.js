import { useSelector, useDispatch } from "react-redux";
import { selectTodoListByStatus } from "../../dao/selector";
import { deleteTodo, updateTodo } from "../../dao/actions";
import classNames from "classnames";
import { useState, useRef } from "react";
import { TODO_STATUS_ENUM } from "../../constants/todo";

function TodoList() {
  const editInputRef = useRef();
  const [editIndex, setEditIndex] = useState(-1);
  const [editContent, setEditContent] = useState("");
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoListByStatus);
  const handleUpdateTodo = (todo) => {
    dispatch(
      updateTodo({
        ...todo,
        completeStatus:
          todo.completeStatus === TODO_STATUS_ENUM.COMPLETED
            ? TODO_STATUS_ENUM.ACTIVE
            : TODO_STATUS_ENUM.COMPLETED,
      })
    );
  };
  const updateTask = (todo) => {
    dispatch(updateTodo(todo));
  };
  const handleKeyDown = (e, todo) => {
    if (e.keyCode === 13) {
      updateTask({
        ...todo,
        name: e.target.value,
      });
      setEditIndex(-1);
    }
  };
  const handleInputBlur = (e, todo) => {
    updateTask({
      ...todo,
      name: e.target.value,
    });
    setEditIndex(-1);
  };
  const handleDeleteTodo = ({ uuid }) => {
    dispatch(deleteTodo(uuid));
  };
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li
            className={classNames({
              completed: todo.completeStatus === TODO_STATUS_ENUM.COMPLETED,
              editing: index === editIndex,
            })}
            key={todo.uuid}
            onDoubleClick={() => {
              setEditIndex(index);
              setEditContent(todo.name);
              setTimeout(() => {
                editInputRef.current.focus();
              }, 0);
            }}
          >
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={todo.completeStatus === TODO_STATUS_ENUM.COMPLETED}
                onChange={() => handleUpdateTodo(todo)}
              />
              <label>{todo.name}</label>
              <button
                className="destroy"
                onClick={() => handleDeleteTodo(todo)}
              ></button>
            </div>
            <input
              className="edit"
              defaultValue={editContent}
              ref={editInputRef}
              onKeyDown={(e) => handleKeyDown(e, todo)}
              onBlur={(e) => handleInputBlur(e, todo)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
