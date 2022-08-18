import { useSelector, useDispatch } from "react-redux";
import { TodoAction, TodoSelector } from "../../dao/todo";
import classNames from "classnames";
import { TODO_STATUS_ENUM } from "../../constants/todo";
import { useEffect } from "react";

const filters = [
  {
    name: "all",
    path: "#/",
    filterType: TODO_STATUS_ENUM.ALl,
  },
  {
    name: "active",
    path: "#/active",
    filterType: TODO_STATUS_ENUM.ACTIVE,
  },
  {
    name: "completed",
    path: "#/completed",
    filterType: TODO_STATUS_ENUM.COMPLETED,
  },
];

function TodoFooter() {
  const dispatch = useDispatch();
  const leftTodo = useSelector(TodoSelector.selectLeftTodo);
  const filterType = useSelector(TodoSelector.selectFilterType);

  const handleClearComplete = () => {
    dispatch(TodoAction.clearCompleted());
  };

  const setFilterType = () => {
    let filterType = window.location.hash.slice(2);
    filterType = filterType === "" ? TODO_STATUS_ENUM.ALl : filterType;
    dispatch(TodoAction.changeFilterType(filterType));
  };

  useEffect(() => {
    setFilterType();
    window.addEventListener("hashchange", function () {
      setFilterType();
    });
  }, []);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftTodo}</strong> item left
      </span>
      <ul className="filters">
        {filters.map((filter) => {
          return (
            <li key={filter.filterType}>
              <a
                className={classNames({
                  selected: filterType === filter.filterType,
                })}
                href={filter.path}
              >
                {filter.name}
              </a>
            </li>
          );
        })}
      </ul>
      <button className="clear-completed" onClick={handleClearComplete}>
        Clear completed
      </button>
    </footer>
  );
}

export default TodoFooter;
