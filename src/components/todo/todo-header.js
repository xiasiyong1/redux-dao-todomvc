import { addTodo } from "../../dao/actions";
import { useDispatch } from "react-redux";

function TodoHeader() {
  const dispatch = useDispatch();

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo(e.target.value));
      e.target.value = "";
      e.target.blur();
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={onKeyDown}
      />
    </header>
  );
}

export default TodoHeader;
