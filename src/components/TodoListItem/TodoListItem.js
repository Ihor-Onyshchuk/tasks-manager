import React from "react";
import "./TodoListItem.scss";

const TodoListItem = ({
  onToggleDone,
  onToggleImportant,
  onDeleted,
  todoItem: { done, important, id, label }
}) => {
  let classNames = "todo-list-item";
  if (done) classNames += " done";
  if (important) classNames += " important";

  return (
    <li className="list-group-item">
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={() => onToggleDone(id)}>
          {label}
        </span>

        <button
          type="button"
          onClick={() => onToggleImportant(id)}
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          onClick={() => onDeleted(id)}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </li>
  );
};

export default TodoListItem;
