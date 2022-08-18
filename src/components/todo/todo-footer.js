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

function TodoFooter(props) {
  const { leftTodo, filterType, clearCompleted, changeFilterType } = props;

  const setFilterType = () => {
    let filterType = window.location.hash.slice(2);
    filterType = filterType === "" ? TODO_STATUS_ENUM.ALl : filterType;
    changeFilterType(filterType);
  };

  useEffect(() => {
    setFilterType();
    window.addEventListener("hashchange", function () {
      setFilterType();
    });
    // eslint-disable-next-line
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
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default TodoFooter;
