import React, { Component } from "react";
import "./TodoItem.scss";

const TodoItem = props => {
  let classNames = "todo-list-item";
  if (props.todoItem.done) {
    classNames += " done";
  }

  if (props.todoItem.important) {
    classNames += " important";
  }

  return (
    <li className="list-group-item">
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={() => props.onToggleDone(props.todoItem.id)}
        >
          {props.todoItem.label}
        </span>

        <button
          type="button"
          onClick={() => props.onToggleImportant(props.todoItem.id)}
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          onClick={() => props.onDeleted(props.todoItem.id)}
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
